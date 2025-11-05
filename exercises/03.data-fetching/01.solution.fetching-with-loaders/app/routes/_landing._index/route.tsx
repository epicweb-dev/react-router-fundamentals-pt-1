import { getAllCategories } from '#app/domain/category.server.ts'
import { getProducts } from '#app/domain/products.server.ts'
import { getMetaFromMatches, getMetaTitle } from '#app/utils/metadata.js'
import { type Route } from './+types/route'
import { CategoriesSection } from './categories-section'
import { FeaturedProductsSection } from './featured-products.section'
import { FeaturesSection } from './features-section'
import { HeroSection } from './hero-section'
import { NewsletterSection } from './newsletter-section'

export const meta: Route.MetaFunction = ({ matches }) => {
	const rootMeta = getMetaFromMatches(matches, 'root')
	const title = getMetaTitle(rootMeta)
	return [{ title }]
}

export const loader = async () => {
	const [{ products }, { categories }] = await Promise.all([
		getProducts({ perPage: 3 }),
		getAllCategories({ perPage: 4 }),
	])

	return { products, categories }
}

// 🐨 Let's access the data we have sent from the server and use it in the components
// 💰 You can access the data directly from the loader as a prop of the component
// 💰 Try using `loaderData` to access the data
export default function HomePage({ loaderData }: Route.ComponentProps) {
	return (
		<div className="bg-stone-50 dark:bg-gray-900">
			<HeroSection />
			<FeaturesSection />
			<CategoriesSection categories={loaderData.categories} />
			<FeaturedProductsSection products={loaderData.products} />
			<NewsletterSection />
		</div>
	)
}
