import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { reactRouterDevTools } from 'react-router-devtools'
import { defineConfig } from 'vite'
import devtoolsJson from 'vite-plugin-devtools-json'

export default defineConfig({
	plugins: [
		reactRouterDevTools(),
		tailwindcss(),
		reactRouter(),
		devtoolsJson(),
	],
	server: {
		port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
	},
	optimizeDeps: {
		include: ['@epic-web/workshop-utils/iframe-sync', 'lucide-react'],
	},
})
