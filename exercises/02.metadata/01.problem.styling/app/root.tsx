import {
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router'
import type { Route } from './+types/root'
import { EpicShop } from './epicshop'

export const links: Route.LinksFunction = () => [
	/** 
	 * 🐨 This exercise will let us learn how to use the links export and it's strengths while working
	 * with meta-data! 
	 *
	 * 🐨 To get us started add the styles into your project that are already prepared for you!
	 * 🐨 Then after you're done with that you can add fonts inside of here!
	 *
	 *  💰 this is the link to the fonts we want to use: 
	 *  https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap
	 */
]

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
				<EpicShop />
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!'
	let details = 'An unexpected error occurred.'
	let stack: string | undefined

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error'
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message
		stack = error.stack
	}

	return (
		<main className="container mx-auto p-4 pt-16">
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className="w-full overflow-x-auto p-4">
					<code>{stack}</code>
				</pre>
			)}
		</main>
	)
}
