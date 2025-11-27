import {
	index,
	layout,
	route,
	type RouteConfig,
} from '@react-router/dev/routes'

export default [
	layout('./routes/_landing/_layout.tsx', [
		index('./routes/_landing/index.tsx'),
		route('terms-of-use', './routes/_landing/terms-of-use.tsx'),
		route('terms-of-service', './routes/_landing/terms-of-service.tsx'),
		route('products', './routes/_landing/products/_layout.tsx', [
			index('./routes/_landing/products/index.tsx'),
			route(':productId', './routes/_landing/products/$productId.tsx'),
		]),
		route('contact', './routes/_landing/contact.tsx'),
		route('about', './routes/_landing/about.tsx'),
		route('cart', './routes/_landing/cart.tsx'),
	]),
] satisfies RouteConfig
