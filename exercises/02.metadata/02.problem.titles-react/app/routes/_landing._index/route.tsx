import { CategoriesSection } from './categories-section'
import { FeaturedProductsSection } from './featured-products.section'
import { FeaturesSection } from './features-section'
import { HeroSection } from './hero-section'
import { NewsletterSection } from './newsletter-section'

export default function HomePage() {
	return (
		<div className="bg-stone-50 dark:bg-gray-900">
			{/* 🐨 Add a <title></title> tag here */}
			{/*  💰 The title should be: "Epic Shop" */}
			<HeroSection />
			<FeaturesSection />
			<CategoriesSection />
			<FeaturedProductsSection />
			<NewsletterSection />
		</div>
	)
}
