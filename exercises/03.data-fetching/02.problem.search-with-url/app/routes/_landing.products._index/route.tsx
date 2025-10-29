import { Filter, Grid, List } from 'lucide-react'
import { useState } from 'react'
import { ProductCard } from '#app/components/product-card.js'
import { getAllBrands } from '#app/domain/brand.server.ts'
import { getAllCategories } from '#app/domain/category.server.ts'
import { getProducts } from '#app/domain/products.server.ts'
import {
	getMetaFromMatches,
	getMetaTitle,
	constructPrefixedTitle,
} from '#app/utils/metadata.js'
import { type Route } from './+types/route'

export const meta: Route.MetaFunction = ({ matches }) => {
	const rootMeta = getMetaFromMatches(matches, 'root')
	const prefix = getMetaTitle(rootMeta)
	return [
		{
			title: constructPrefixedTitle('All Products', prefix),
		},
	]
}
// 🐨 Update the loader to accept a search parameter and pass it to getProducts
export const loader = async ({ request }: Route.LoaderArgs) => {
	// 🐨 Get the search parameter from the URL
	// 💰 You can use the URL constructor to parse the request URL in loaders
	const url = new URL(request.url)
	// 🐨 Get the searchParameters from the URL
	// 💰 The URL class has a searchParams property that returns a URLSearchParams object
	const searchParams = undefined
	// 🐨 Get the 'q' parameter from the search parameters
	const search = undefined
	const [{ products }, { categories }, { brands }] = await Promise.all([
		// 🐨 Pass the search into getProducts
		getProducts({}),
		getAllCategories(),
		getAllBrands(),
	])

	return {
		products,
		categories,
		brands,
	}
}

export default function ProductsPage({ loaderData }: Route.ComponentProps) {
	const { products, categories, brands } = loaderData
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [selectedBrand, setBrand] = useState('All')
	const [priceRange, setPriceRange] = useState([0, 300])
	const [sortBy, setSortBy] = useState('name')
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
	const [showFilters, setShowFilters] = useState(false)

	const filteredProducts = products

	return (
		<div className="min-h-screen bg-stone-50 dark:bg-gray-900">
			{/* Header */}
			<div className="border-b border-stone-200 bg-white dark:border-gray-700 dark:bg-gray-900">
				<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row md:items-center md:justify-between">
						<div>
							<h1 className="text-3xl font-light tracking-tight text-gray-900 dark:text-white">
								All Products
							</h1>
							<p className="mt-2 text-gray-600 dark:text-gray-300">
								{filteredProducts.length} products found
							</p>
						</div>
						<div className="mt-4 flex items-center space-x-4 md:mt-0">
							<button
								onClick={() => setShowFilters(!showFilters)}
								className="flex items-center space-x-2 rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 md:hidden dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
							>
								<Filter className="h-4 w-4" />
								<span>Filters</span>
							</button>
							<select
								value={sortBy}
								onChange={(e) => setSortBy(e.target.value)}
								className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
							>
								<option value="name">Sort by Name</option>
								<option value="price-low">Price: Low to High</option>
								<option value="price-high">Price: High to Low</option>
								<option value="rating">Highest Rated</option>
							</select>
							<div className="flex overflow-hidden rounded-lg border border-gray-300 dark:border-gray-600">
								<button
									onClick={() => setViewMode('grid')}
									className={`p-2 ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}
								>
									<Grid className="h-4 w-4" />
								</button>
								<button
									onClick={() => setViewMode('list')}
									className={`p-2 ${viewMode === 'list' ? 'bg-amber-600 text-white' : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300'}`}
								>
									<List className="h-4 w-4" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="flex flex-col gap-8 lg:flex-row">
					{/* Filters Sidebar */}
					<div
						className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}
					>
						<div className="space-y-6 rounded-lg bg-white p-6 dark:bg-gray-800">
							<div>
								<h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
									Category
								</h3>
								<div className="space-y-2">
									{categories.map((category) => (
										<button
											key={category.id}
											onClick={() => setSelectedCategory(category.name)}
											className={`block w-full rounded-lg px-3 py-2 text-left transition-colors duration-200 ${
												selectedCategory === category.name
													? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
													: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
											}`}
										>
											{category.name}
										</button>
									))}
								</div>
							</div>

							<div>
								<h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
									Brand
								</h3>
								<div className="space-y-2">
									{brands.map((brand) => (
										<button
											key={brand.id}
											onClick={() => setBrand(brand.name)}
											className={`block w-full rounded-lg px-3 py-2 text-left transition-colors duration-200 ${
												selectedBrand === brand.name
													? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
													: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
											}`}
										>
											{brand.name}
										</button>
									))}
								</div>
							</div>

							<div>
								<h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
									Price Range
								</h3>
								<div className="space-y-4">
									<input
										type="range"
										min="0"
										max="300"
										value={priceRange[1]}
										onChange={(e) =>
											setPriceRange([priceRange[0], parseInt(e.target.value)])
										}
										className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 dark:bg-gray-700"
									/>
									<div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
										<span>$0</span>
										<span>${priceRange[1]}</span>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Products Grid/List */}
					<div className="flex-1">
						{viewMode === 'grid' ? (
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
								{filteredProducts.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						) : (
							<div className="space-y-6">
								{filteredProducts.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						)}

						{filteredProducts.length === 0 && (
							<div className="py-16 text-center">
								<div className="mb-4 text-gray-400 dark:text-gray-600">
									<Filter className="mx-auto h-16 w-16" />
								</div>
								<h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">
									No products found
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Try adjusting your filters to see more results.
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
