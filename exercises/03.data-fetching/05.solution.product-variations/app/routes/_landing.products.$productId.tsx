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
import { Link, useSearchParams } from 'react-router'
import { ProductCard } from '#app/components/product-card.tsx'
import {
	getProductById,
	getRelatedProducts,
} from '#app/domain/products.server.js'
import {
	getMetaFromMatches,
	getMetaTitle,
	constructPrefixedTitle,
} from '#app/utils/metadata.js'
import { type Route } from './+types/_landing.products.$productId'

export const meta: Route.MetaFunction = ({ matches }) => {
	const rootMeta = getMetaFromMatches(matches, 'root')
	const prefix = getMetaTitle(rootMeta)

	return [
		{
			title: constructPrefixedTitle('Product overview', prefix),
		},
	]
}

export const loader = async ({ params, request }: Route.LoaderArgs) => {
	const { productId } = params
	const product = await getProductById(productId)
	const relatedProducts = await getRelatedProducts(
		productId,
		product?.category.id,
		product?.brand.id,
	)
	const uniqueSizes = Array.from(
		new Set(product?.variations.map((v) => v.size) || []),
	)
	const uniqueColors = Array.from(
		new Set(product?.variations.map((v) => v.color) || []),
	)

	const url = new URL(request.url)
	const searchParams = url.searchParams
	// Get the selected size and color from the search params
	const selectedSize = searchParams.get('size') || ''
	const selectedColor = searchParams.get('color') || ''
	// Determine available sizes for the currently selected color
	const availableSizes = selectedColor
		? product?.variations
				.filter((v) => v.color === selectedColor && v.quantity > 0)
				.map((v) => v.size) || []
		: uniqueSizes
	// Determine available colors for the currently selected size
	const availableColors = selectedSize
		? product?.variations
				.filter((v) => v.size === selectedSize && v.quantity > 0)
				.map((v) => v.color) || []
		: uniqueColors

	const selectedVariation = product?.variations.find(
		(v) => v.size === selectedSize && v.color === selectedColor,
	)

	return {
		product,
		uniqueSizes,
		uniqueColors,
		availableSizes,
		availableColors,
		selectedVariation,
		relatedProducts,
	}
}

export default function ProductDetailPage({
	loaderData,
}: Route.ComponentProps) {
	const {
		product,
		selectedVariation,
		uniqueColors,
		uniqueSizes,
		availableColors,
		availableSizes,
		relatedProducts,
	} = loaderData
	const [searchParams, setSearchParams] = useSearchParams()
	const [quantity, setQuantity] = useState(1)
	const [activeImage, setActiveImage] = useState(0)
	const selectedSize = searchParams.get('size') || ''
	const selectedColor = searchParams.get('color') || ''
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

	const handleSizeChange = (size: string) => () => {
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev)
			if (size === selectedSize) {
				newParams.delete('size')
			} else {
				newParams.set('size', size)
			}
			const color = newParams.get('color')
			// If the selected color is not available for the new size, remove it
			const noQuantityForColor =
				color &&
				product.variations.some(
					(v) => v.size === size && v.color === color && v.quantity === 0,
				)

			if (noQuantityForColor) {
				newParams.delete('color')
			}
			return newParams
		})
		setQuantity(1)
	}

	const handleColorChange = (color: string) => () => {
		setSearchParams((prev) => {
			const newParams = new URLSearchParams(prev)
			if (color === selectedColor) {
				newParams.delete('color')
			} else {
				newParams.set('color', color)
			}
			const size = newParams.get('size')
			// If the selected size is not available for the new color, remove it
			const noQuantityForSize =
				size &&
				product.variations.some(
					(v) => v.color === color && v.size === size && v.quantity === 0,
				)
			if (noQuantityForSize) {
				newParams.delete('size')
			}
			return newParams
		})
		setQuantity(1)
	}

	// Mock additional images for gallery
	const productImages = [product.imageUrl]

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
									className={`aspect-w-1 aspect-h-1 overflow-hidden rounded-lg border-2 bg-white transition-colors duration-200 dark:bg-gray-800 ${
										activeImage === index
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
								{product.brand.name}
							</div>
							<h1 className="mb-4 text-3xl font-light text-gray-900 dark:text-white">
								{product.name}
							</h1>
							<div className="mb-4 flex items-center space-x-4">
								<div className="flex items-center space-x-1">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`h-5 w-5 ${
												i < Math.floor(product.reviewScore ?? 0)
													? 'fill-current text-amber-500'
													: 'text-gray-300 dark:text-gray-600'
											}`}
										/>
									))}
									<span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">
										{product.reviewScore}
									</span>
								</div>
								<span className="text-sm text-gray-500 dark:text-gray-400">
									({product.reviews.length} reviews)
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
								{uniqueSizes.map((size) => (
									<button
										key={size}
										disabled={!availableSizes.includes(size)}
										onClick={handleSizeChange(size)}
										title={!availableSizes.includes(size) ? 'Out of stock' : ''}
										className={`rounded-lg border px-4 py-3 text-center transition-colors duration-200 disabled:opacity-20 ${
											selectedSize === size
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
							<div className="flex flex-wrap space-x-3">
								{uniqueColors.map((color) => (
									<button
										key={color}
										disabled={!availableColors.includes(color)}
										onClick={handleColorChange(color)}
										title={
											!availableColors.includes(color) ? 'Out of stock' : ''
										}
										className={`rounded-lg border px-4 py-2 transition-colors duration-200 disabled:opacity-20 ${
											selectedColor === color
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
						{selectedVariation ? (
							<div>
								<h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
									Quantity
								</h3>
								<div className="flex items-center space-x-4">
									<div className="flex items-center rounded-lg border border-gray-300 dark:border-gray-600">
										<button
											onClick={() => setQuantity(Math.max(1, quantity - 1))}
											disabled={quantity === 1}
											className="p-2 transition-colors duration-200 hover:bg-gray-100 disabled:opacity-20 disabled:hover:bg-transparent dark:hover:bg-gray-700"
										>
											<Minus className="h-4 w-4" />
										</button>
										<span className="px-4 py-2 font-medium text-gray-900 dark:text-white">
											{quantity}
										</span>
										<button
											onClick={() => setQuantity(quantity + 1)}
											disabled={quantity === selectedVariation.quantity}
											className="p-2 transition-colors duration-200 hover:bg-gray-100 disabled:opacity-20 disabled:hover:bg-transparent dark:hover:bg-gray-700"
										>
											<Plus className="h-4 w-4" />
										</button>
									</div>
								</div>
							</div>
						) : null}

						{/* Add to Cart */}
						<div className="flex space-x-4">
							<button
								onClick={handleAddToCart}
								disabled={
									!selectedVariation || selectedVariation.quantity === 0
								}
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
								<ProductCard key={relatedProduct.id} product={relatedProduct} />
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
