import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router'
// 🐨 You should use the ProductCard component to render each product instead of the JSX
// that is currently in place
import { ProductCard } from '#app/components/product-card.js'
import { type ProductCardInfo } from '#app/domain/products.server.js'
// 💣 We Want to remove this file completely and use dynamic info from the DB
import { products as hardcodedProducts } from '../../../../../data/products'

interface FeaturedProductsSectionProps {
	products: ProductCardInfo[]
}

// 🐨 Access the dynamic products here and use them instead of the hardcoded ones
export const FeaturedProductsSection = ({}: FeaturedProductsSectionProps) => {
	// 💰 You get 4 products from the server at this point!
	const products = hardcodedProducts.slice(0, 4)

	return (
		<div className="bg-white py-32 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-20 text-center">
					<h2 className="mb-6 text-4xl font-extralight tracking-tight text-gray-900 dark:text-white">
						Featured Products
					</h2>
					<p className="text-xl leading-relaxed font-light text-gray-600 dark:text-gray-300">
						Handpicked favorites from our premium collection
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{products.map((product) => (
						// 🐨 Replace this with the ProductCard component that 🧝‍♀️ prepared!
						<Link
							key={product.id}
							to={`/products/${product.id}`}
							className="group overflow-hidden rounded-lg bg-stone-50 transition-all duration-300 hover:scale-105 hover:transform hover:shadow-xl dark:bg-gray-800"
						>
							<div className="relative overflow-hidden">
								<img
									src={product.imageUrl}
									alt={product.name}
									className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 dark:bg-gray-900">
									<div className="flex items-center space-x-1">
										<Star className="h-4 w-4 fill-current text-amber-500" />
										<span className="text-sm font-medium text-gray-900 dark:text-white">
											{product.reviewScore}
										</span>
									</div>
								</div>
							</div>
							<div className="p-6">
								<div className="mb-2 text-sm font-medium text-amber-600 dark:text-amber-500">
									{product.brand.name}
								</div>
								<h3 className="mb-2 text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
									{product.name}
								</h3>
								<div className="flex items-center justify-between">
									<span className="text-xl font-bold text-gray-900 dark:text-white">
										${product.price}
									</span>
									<span className="text-sm text-gray-500 dark:text-gray-400">
										{product.reviews.length} reviews
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>

				<div className="mt-12 text-center">
					<Link
						to="/products"
						className="group inline-flex items-center bg-amber-600 px-8 py-3 text-lg font-medium tracking-wide text-white transition-all duration-300 hover:bg-amber-700 hover:shadow-lg hover:shadow-amber-600/25"
					>
						View All Products
						<ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
					</Link>
				</div>
			</div>
		</div>
	)
}
