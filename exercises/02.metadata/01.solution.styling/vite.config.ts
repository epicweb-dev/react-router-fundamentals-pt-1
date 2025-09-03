import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
	server: {
		port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
	},
	optimizeDeps: {
		include: ["@epic-web/workshop-utils/iframe-sync", "lucide-react"]
	}
})
