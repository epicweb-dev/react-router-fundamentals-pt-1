import { getMetaFromMatches, getMetaTitle, } from '#app/utils/metadata.js'
import type { Route } from './+types/route'
import { CategoriesSection } from './categories-section'
import { FeaturedProductsSection } from './featured-products.section'
import { FeaturesSection } from './features-section'
import { HeroSection } from './hero-section'
import { NewsletterSection } from './newsletter-section'

export const meta: Route.MetaFunction = ({ matches }) => {
	const rootMeta = getMetaFromMatches(matches, 'root')
	const title = getMetaTitle(rootMeta);
	return [{ title }]
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
