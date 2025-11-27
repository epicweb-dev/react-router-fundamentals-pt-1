import { Outlet } from 'react-router'

export default function LayoutPage() {
	return (
		<div className="min-h-screen bg-stone-50 transition-colors duration-300 dark:bg-gray-900">
			<main className="flex-grow">
				<Outlet />
			</main>
		</div>
	)
}
