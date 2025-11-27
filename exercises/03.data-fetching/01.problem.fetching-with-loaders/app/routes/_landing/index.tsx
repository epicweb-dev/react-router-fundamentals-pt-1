import { getAllCategories } from '#app/domain/category.server.ts'
import { getProducts } from '#app/domain/products.server.ts'
import { getMetaFromMatches, getMetaTitle } from '#app/utils/metadata.js'
import { CategoriesSection } from './+/index/categories-section'
import { FeaturedProductsSection } from './+/index/featured-products.section'
import { FeaturesSection } from './+/index/features-section'
import { HeroSection } from './+/index/hero-section'
import { NewsletterSection } from './+/index/newsletter-section'
import { type Route } from './+types/index'

export const meta: Route.MetaFunction = ({ matches }) => {
	const rootMeta = getMetaFromMatches(matches, 'root')
	const title = getMetaTitle(rootMeta)
	return [{ title }]
}

export const loader = async () => {
	// 🐨 You should fetch the data directly from the DB here!
	// 💰 Bonus points: Optimize the retrieval of products and categories by fetching them in parallel
	// 💰 You can use the function 🧝‍♀️ prepared for us above called `getProducts`
	// 💰 take 3 products only via `perPage`

	// 💰 You can use the function 🧝‍♀️ prepared for us above called `getAllCategories`
	// 💰 take 4 categories only

	// 💰 These return just empty arrays, these should return actual data from the DB
	return { products: [], categories: [] }
}

// 🐨 Let's access the data we have sent from the server and use it in the components
// 💰 You can access the data directly from the loader as a prop of the component
// 💰 Try using `loaderData` to access the data
export default function HomePage({}: Route.ComponentProps) {
	return (
		<div className="bg-stone-50 dark:bg-gray-900">
			<HeroSection />
			<FeaturesSection />
			{/** 💰 Let's pass in the actual categories here! */}
			<CategoriesSection categories={[]} />
			{/** 💰 Let's pass in the actual products here! */}
			<FeaturedProductsSection products={[]} />
			<NewsletterSection />
		</div>
	)
}
