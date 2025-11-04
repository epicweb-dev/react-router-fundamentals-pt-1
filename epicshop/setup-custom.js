import path from 'node:path'
import { warm } from '@epic-web/workshop-cli/warm'
import {
	getApps,
	isProblemApp,
	setPlayground,
} from '@epic-web/workshop-utils/apps.server'
import { execa } from 'execa'
import fsExtra from 'fs-extra'

await warm()

const allApps = await getApps()

console.log('🔗 Generating React Router types')
for (const app of allApps) {
	try {
		await execa('react-router', ['typegen'], {
			cwd: app.fullPath,
			stdio: 'pipe',
		})
	} catch (error) {
		if (error.stdout) process.stdout.write(error.stdout)
		if (error.stderr) process.stderr.write(error.stderr)
		throw error
	}
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
if (!process.env.SKIP_PRISMA) {
	console.log(`🏗  generating prisma client in all ${allApps.length} apps...`)
	for (const app of allApps) {
		const prismaDir = path.join(app.fullPath, 'prisma')
		try {
			if (await fsExtra.exists(prismaDir)) {
				await execa(`npm`, ["run", "db:gen"], { cwd: app.fullPath, all: true })
			}
		} catch (prismaGenerateResult) {
			console.log(prismaGenerateResult.all)
			throw new Error(`❌  prisma generate failed in ${app.relativePath}`)
		}
	}
	console.log('✅ prisma client generated')
}