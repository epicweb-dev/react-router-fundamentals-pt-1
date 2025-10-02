import { Filter, Grid, List } from 'lucide-react'
import { useState } from 'react'
import { Form, useSearchParams, useNavigation } from 'react-router'
import { ProductCard } from '#app/components/product-card.js'
import { getAllBrands } from '#app/domain/brand.server.js'
import { getAllCategories } from '#app/domain/category.server.js'
import { getProducts } from '#app/domain/products.server.js'
import {
	getMetaFromMatches,
	getMetaTitle,
	constructPrefixedTitle,
} from '#app/utils/metadata.js'
import { type Route } from './+types/_landing.products._index'

export const meta: Route.MetaFunction = ({ matches }) => {
	const rootMeta = getMetaFromMatches(matches, 'root')
	const prefix = getMetaTitle(rootMeta)
	return [
		{
			title: constructPrefixedTitle('All Products', prefix),
		},
	]
}

export const loader = async ({ request }: Route.LoaderArgs) => {
	const url = new URL(request.url)
	const searchParams = url.searchParams
	const category = searchParams.getAll('category') || []
	const brand = searchParams.getAll('brand') || []
	const priceMin = parseFloat(searchParams.get('priceMin') || '0')
	const priceMax = parseFloat(searchParams.get('priceMax') || '300')
	const sortBy = searchParams.get('sortBy') || 'name'
	// Here you could handle query parameters for filtering, sorting, etc.
	const products = await getProducts({
		category,
		brand,
		priceMin,
		priceMax,
		sortBy: sortBy as 'name' | 'price-low' | 'price-high' | 'rating',
	})
	const categories = await getAllCategories()
	const brands = await getAllBrands()
	return { products, categories, brands }
}

export default function ProductsPage({ loaderData }: Route.ComponentProps) {
	const [searchParams, setSearchParams] = useSearchParams()
	const navigation = useNavigation()
	const isPageLoading = navigation.state !== 'idle'
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
	const [showFilters, setShowFilters] = useState(false)
	const priceMin = searchParams.get('priceMin') || ''
	const priceMax = searchParams.get('priceMax') || ''
	const products = loaderData.products
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
								{products.length} products found
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
								name="sortBy"
								onChange={(e) =>
									setSearchParams((prev) => {
										const newParams = new URLSearchParams(prev)
										newParams.set('sortBy', e.target.value)
										return newParams
									})
								}
								defaultValue={searchParams.get('sortBy') || 'name'}
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
						<Form>
							<div className="space-y-6 rounded-lg bg-white p-6 dark:bg-gray-800">
								<div>
									<h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
										Category
									</h3>
									<div className="space-y-2">
										{loaderData.categories.map((category) => (
											<div key={category.id} className="flex items-center">
												<input
													className="peer hidden"
													type="checkbox"
													id={category.id}
													disabled={isPageLoading}
													name="category"
													value={category.name}
												/>
												<label
													className={`block w-full rounded-lg px-3 py-2 text-left text-gray-700 transition-colors duration-200 peer-checked:bg-amber-100 peer-checked:text-amber-800 hover:bg-gray-100 dark:text-gray-300 dark:peer-checked:bg-amber-900/30 dark:peer-checked:text-amber-200 dark:hover:bg-gray-700`}
													htmlFor={category.id}
												>
													{category.name}
												</label>
											</div>
										))}
									</div>
								</div>

								<div>
									<h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
										Brand
									</h3>
									<div className="space-y-2">
										{loaderData.brands.map((brand) => (
											<div key={brand.id} className="flex items-center">
												<input
													className="peer hidden"
													type="checkbox"
													id={brand.id}
													disabled={isPageLoading}
													name="brand"
													value={brand.name}
												/>
												<label
													className={`block w-full rounded-lg px-3 py-2 text-left text-gray-700 transition-colors duration-200 peer-checked:bg-amber-100 peer-checked:text-amber-800 hover:bg-gray-100 dark:text-gray-300 dark:peer-checked:bg-amber-900/30 dark:peer-checked:text-amber-200 dark:hover:bg-gray-700`}
													htmlFor={brand.id}
												>
													{brand.name}
												</label>
											</div>
										))}
									</div>
								</div>

								<div>
									<h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
										Price Range
									</h3>
									<div className="flex items-center justify-center gap-2">
										<input
											type="number"
											name="priceMin"
											defaultValue={priceMin}
											disabled={isPageLoading}
											className="w-1/2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
										/>

										<input
											type="number"
											name="priceMax"
											defaultValue={priceMax}
											disabled={isPageLoading}
											className="w-1/2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
										/>
									</div>
								</div>

								<button
									disabled={isPageLoading}
									type="submit"
									className="w-full rounded-lg bg-amber-600 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-amber-700 disabled:opacity-50"
								>
									Apply Filters
								</button>
							</div>
						</Form>
					</div>

					{/* Products Grid/List */}
					<div className="flex-1">
						{isPageLoading ? (
							<div className="mb-4 text-center text-gray-500 dark:text-gray-400">
								Loading...
							</div>
						) : (
							<>
								{viewMode === 'grid' ? (
									<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
										{loaderData.products.map((product) => (
											<ProductCard key={product.id} product={product} />
										))}
									</div>
								) : (
									<div className="space-y-6">
										{loaderData.products.map((product) => (
											<ProductCard key={product.id} product={product} />
										))}
									</div>
								)}
							</>
						)}

						{products.length === 0 && (
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
