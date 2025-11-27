import { CategoriesSection } from './+/index/categories-section'
import { FeaturedProductsSection } from './+/index/featured-products.section'
import { FeaturesSection } from './+/index/features-section'
import { HeroSection } from './+/index/hero-section'
import { NewsletterSection } from './+/index/newsletter-section'

export default function HomePage() {
	return (
		<div className="bg-stone-50 dark:bg-gray-900">
			<title>Epic Shop</title>
			<HeroSection />
			<FeaturesSection />
			<CategoriesSection />
			<FeaturedProductsSection />
			<NewsletterSection />
		</div>
	)
}
