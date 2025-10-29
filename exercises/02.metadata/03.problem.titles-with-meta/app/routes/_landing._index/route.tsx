import {
	getMetaFromMatches,
	getMetaTitle,
	constructPrefixedTitle,
} from '#app/utils/metadata.js'
import { type Route } from './+types/route'
import { CategoriesSection } from './categories-section'
import { FeaturedProductsSection } from './featured-products.section'
import { FeaturesSection } from './features-section'
import { HeroSection } from './hero-section'
import { NewsletterSection } from './newsletter-section'
// 💰 You will need these utilities! Feel free to check their implementation first!

// 🐨 We want to include the root meta in the title to have Epic Shop | Terms of Use
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
