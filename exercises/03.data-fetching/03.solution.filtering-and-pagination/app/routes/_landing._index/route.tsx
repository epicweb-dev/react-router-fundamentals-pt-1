import { getAllCategories } from '#app/domain/category.server.js'
import { getProducts } from '#app/domain/products.server.js'
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
		getProducts(),
		getAllCategories({ perPage: 4 }),
	])

	return { products, categories }
}

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
