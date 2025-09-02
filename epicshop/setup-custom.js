import { spawn } from 'node:child_process'
import path from 'node:path'
import { warm } from '@epic-web/workshop-cli/warm'
import {
	getApps,
	isProblemApp,
	setPlayground,
} from '@epic-web/workshop-utils/apps.server'
import fsExtra from 'fs-extra'

await warm()

const allApps = await getApps()

console.log('🔗 Generating React Router types')
for (const app of allApps) {
	// run npx react-router typegen in app
	await runWithOutputOnFailure('npx', ['react-router', 'typegen'], {
		cwd: app.fullPath,
	})
}

function runWithOutputOnFailure(command, args, options) {
	// { type: 'stdout', data: Buffer }
	const outputBuffer = []
	return new Promise((resolve, reject) => {
		const child = spawn(command, args, {
			...options,
			stdio: ['ignore', 'pipe', 'pipe'],
		})
		child.stdout.on('data', (data) => {
			outputBuffer.push({ type: 'stdout', data })
		})
		child.stderr.on('data', (data) => {
			outputBuffer.push({ type: 'stderr', data })
		})
		child.on('close', (code) => {
			if (code !== 0) {
				for (const { type, data } of outputBuffer) {
					if (type === 'stderr') {
						process.stderr.write(data)
					} else {
						process.stdout.write(data)
					}
				}
				reject(code)
			} else {
				resolve('ok')
			}
		})
	})
}

const problemApps = allApps.filter(isProblemApp)

if (!process.env.SKIP_PLAYGROUND) {
	const firstProblemApp = problemApps[0]
	if (firstProblemApp) {
		console.log('🛝  setting up the first problem app...')
		const playgroundPath = path.join(process.cwd(), 'playground')
		if (await fsExtra.exists(playgroundPath)) {
			console.log('🗑  deleting existing playground app')
			await fsExtra.remove(playgroundPath)
		}
		await setPlayground(firstProblemApp.fullPath).then(
			() => {
				console.log('✅ first problem app set up')
			},
			(error) => {
				console.error(error)
				throw new Error('❌  first problem app setup failed')
			},
		)
	}
}
