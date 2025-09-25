import {
	ArrowLeft,
	Star,
	Heart,
	Truck,
	Shield,
	RefreshCw,
	Plus,
	Minus,
} from 'lucide-react'
import { useState } from 'react'
import { useParams, Link } from 'react-router'
import { getMetaFromMatches, getMetaTitle, constructPrefixedTitle } from '#app/utils/metadata.js'
import { products } from '../../data/products'
import type { Route } from './+types/_landing.products.$productId'

export const meta: Route.MetaFunction = ({ matches }) => {
	const rootMeta = getMetaFromMatches(matches, 'root')
	const prefix = getMetaTitle(rootMeta);

	return [{
		title: constructPrefixedTitle("Product overview", prefix),
	}]
}

export default function ProductDetailPage() {
	const { productId } = useParams()
	const [selectedSize, setSelectedSize] = useState('')
	const [selectedColor, setSelectedColor] = useState('')
	const [quantity, setQuantity] = useState(1)
	const [activeImage, setActiveImage] = useState(0)

	const product = products.find((p) => p.id === productId)

	if (!product) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-stone-50 dark:bg-gray-900">

				<div className="text-center">
					<h2 className="mb-4 text-2xl font-light text-gray-900 dark:text-white">
						Product not found
					</h2>
					<Link
						to="/products"
						className="text-amber-600 hover:underline dark:text-amber-500"
					>
						Back to products
					</Link>
				</div>
			</div>
		)
	}

	const handleAddToCart = () => {
		if (!selectedSize || !selectedColor) {
			alert('Please select size and color')
			return
		}

		alert('Added to cart!')
	}

	// Mock additional images for gallery
	const productImages = [
		product.image,
		product.image,
		product.image,
		product.image,
	]

	const relatedProducts = products
		.filter((p) => p.category === product.category && p.id !== product.id)
		.slice(0, 4)

	return (
		<div className="min-h-screen bg-stone-50 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				{/* Breadcrumb */}
				<div className="mb-8 flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
					<Link
						to="/products"
						className="flex items-center hover:text-amber-600 dark:hover:text-amber-500"
					>
						<ArrowLeft className="mr-1 h-4 w-4" />
						Back to Products
					</Link>
				</div>

				<div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
					{/* Product Images */}
					<div className="space-y-4">
						<div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-white dark:bg-gray-800">
							<img
								src={productImages[activeImage]}
								alt={product.name}
								className="h-96 w-full object-cover"
							/>
						</div>
						<div className="grid grid-cols-4 gap-4">
							{productImages.map((image, index) => (
								<button
									key={index}
									onClick={() => setActiveImage(index)}
									className={`aspect-w-1 aspect-h-1 overflow-hidden rounded-lg border-2 bg-white transition-colors duration-200 dark:bg-gray-800 ${activeImage === index
										? 'border-amber-500'
										: 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
										}`}
								>
									<img
										src={image}
										alt={`${product.name} ${index + 1}`}
										className="h-20 w-full object-cover"
									/>
								</button>
							))}
						</div>
					</div>

					{/* Product Info */}
					<div className="space-y-6">
						<div>
							<div className="mb-2 text-sm font-medium text-amber-600 dark:text-amber-500">
								{product.brand}
							</div>
							<h1 className="mb-4 text-3xl font-light text-gray-900 dark:text-white">
								{product.name}
							</h1>
							<div className="mb-4 flex items-center space-x-4">
								<div className="flex items-center space-x-1">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`h-5 w-5 ${i < Math.floor(product.rating)
												? 'fill-current text-amber-500'
												: 'text-gray-300 dark:text-gray-600'
												}`}
										/>
									))}
									<span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
										{product.rating}
									</span>
								</div>
								<span className="text-sm text-gray-500 dark:text-gray-400">
									({product.reviews} reviews)
								</span>
							</div>
							<div className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
								${product.price}
							</div>
							<p className="leading-relaxed text-gray-600 dark:text-gray-300">
								{product.description}
							</p>
						</div>

						{/* Size Selection */}
						<div>
							<h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
								Size
							</h3>
							<div className="grid grid-cols-6 gap-3">
								{product.sizes.map((size) => (
									<button
										key={size}
										onClick={() => setSelectedSize(size)}
										className={`rounded-lg border px-4 py-3 text-center transition-colors duration-200 ${selectedSize === size
											? 'border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
											: 'border-gray-300 text-gray-700 hover:border-amber-300 dark:border-gray-600 dark:text-gray-300 dark:hover:border-amber-700'
											}`}
									>
										{size}
									</button>
								))}
							</div>
						</div>

						{/* Color Selection */}
						<div>
							<h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
								Color
							</h3>
							<div className="flex space-x-3">
								{product.colors.map((color) => (
									<button
										key={color}
										onClick={() => setSelectedColor(color)}
										className={`rounded-lg border px-4 py-2 transition-colors duration-200 ${selectedColor === color
											? 'border-amber-500 bg-amber-50 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
											: 'border-gray-300 text-gray-700 hover:border-amber-300 dark:border-gray-600 dark:text-gray-300 dark:hover:border-amber-700'
											}`}
									>
										{color}
									</button>
								))}
							</div>
						</div>

						{/* Quantity */}
						<div>
							<h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
								Quantity
							</h3>
							<div className="flex items-center space-x-4">
								<div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-600">
									<button
										onClick={() => setQuantity(Math.max(1, quantity - 1))}
										className="p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										<Minus className="h-4 w-4" />
									</button>
									<span className="px-4 py-2 font-medium text-gray-900 dark:text-white">
										{quantity}
									</span>
									<button
										onClick={() => setQuantity(quantity + 1)}
										className="p-2 transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
									>
										<Plus className="h-4 w-4" />
									</button>
								</div>
							</div>
						</div>

						{/* Add to Cart */}
						<div className="flex space-x-4">
							<button
								onClick={handleAddToCart}
								className="flex-1 rounded-lg bg-amber-600 px-6 py-4 font-medium text-white transition-colors duration-300 hover:bg-amber-700 hover:shadow-lg"
							>
								Add to Cart
							</button>
							<button className="rounded-lg border border-gray-300 p-4 transition-colors duration-200 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800">
								<Heart className="h-6 w-6 text-gray-600 dark:text-gray-400" />
							</button>
						</div>

						{/* Features */}
						<div className="border-t border-gray-200 pt-6 dark:border-gray-700">
							<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
								<div className="flex items-center space-x-3">
									<Truck className="h-5 w-5 text-amber-600 dark:text-amber-500" />
									<span className="text-sm text-gray-600 dark:text-gray-300">
										Free Shipping
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<RefreshCw className="h-5 w-5 text-amber-600 dark:text-amber-500" />
									<span className="text-sm text-gray-600 dark:text-gray-300">
										30-Day Returns
									</span>
								</div>
								<div className="flex items-center space-x-3">
									<Shield className="h-5 w-5 text-amber-600 dark:text-amber-500" />
									<span className="text-sm text-gray-600 dark:text-gray-300">
										2-Year Warranty
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Related Products */}
				{relatedProducts.length > 0 && (
					<div className="mt-24">
						<h2 className="mb-12 text-center text-3xl font-light text-gray-900 dark:text-white">
							You Might Also Like
						</h2>
						<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
							{relatedProducts.map((relatedProduct) => (
								<Link
									key={relatedProduct.id}
									to={`/products/${relatedProduct.id}`}
									className="group overflow-hidden rounded-lg bg-white transition-all duration-300 hover:scale-105 hover:transform hover:shadow-xl dark:bg-gray-800"
								>
									<div className="relative overflow-hidden">
										<img
											src={relatedProduct.image}
											alt={relatedProduct.name}
											className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute top-4 right-4 rounded-full bg-white px-3 py-1 dark:bg-gray-900">
											<div className="flex items-center space-x-1">
												<Star className="h-4 w-4 fill-current text-amber-500" />
												<span className="text-sm font-medium text-gray-900 dark:text-white">
													{relatedProduct.rating}
												</span>
											</div>
										</div>
									</div>
									<div className="p-6">
										<div className="mb-2 text-sm font-medium text-amber-600 dark:text-amber-500">
											{relatedProduct.brand}
										</div>
										<h3 className="mb-2 text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
											{relatedProduct.name}
										</h3>
										<div className="flex items-center justify-between">
											<span className="text-xl font-bold text-gray-900 dark:text-white">
												${relatedProduct.price}
											</span>
											<span className="text-sm text-gray-500 dark:text-gray-400">
												{relatedProduct.reviews} reviews
											</span>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
