// 💰 You will need these utilities! Feel free to check their implementation first!
import { getMetaFromMatches, getMetaTitle } from '#app/utils/metadata.js'
import { CategoriesSection } from './+/index/categories-section'
import { FeaturedProductsSection } from './+/index/featured-products.section'
import { FeaturesSection } from './+/index/features-section'
import { HeroSection } from './+/index/hero-section'
import { NewsletterSection } from './+/index/newsletter-section'
import { type Route } from './+types/index'

// 🐨 We want to include the root meta in the title to have Epic Shop
export const meta: Route.MetaFunction = ({ matches }) => {
	// 💰 You can use getMetaFromMatches and specify "root" to extract the meta information from root
	// 💰 You can use getMetaTitle to extract the title from the root meta information
	return [
		{
			// 💰 You can use the title from the root to return the same title here
		},
	]
}

export default function HomePage() {
	return (
		<div className="bg-stone-50 dark:bg-gray-900">
			<HeroSection />
			<FeaturesSection />
			<CategoriesSection />
			<FeaturedProductsSection />
			<NewsletterSection />
		</div>
	)
}
