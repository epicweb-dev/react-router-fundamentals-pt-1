import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [tailwindcss(), reactRouter()],
	server: {
		port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
	},
	optimizeDeps: {
		include: ["@epic-web/workshop-utils/iframe-sync", "lucide-react"]
	}
})
