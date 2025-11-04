import { Filter, Grid, List } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams, useNavigation } from 'react-router'
import { ProductCard } from '#app/components/product-card.js'
import { getAllBrands } from '#app/domain/brand.server.js'
import { getAllCategories } from '#app/domain/category.server.js'
import {
	// 💰  we need this to extract the filters!
	extractProductFiltersFromSearchParams,
	getProducts,
} from '#app/domain/products.server.js'
import {
	getMetaFromMatches,
	getMetaTitle,
	constructPrefixedTitle,
} from '#app/utils/metadata.js'
import { type Route } from './+types/route'
import { ProductFilters } from './product-filters'

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
	// 🐨 Extract the filters from the search parameters
	const filters = undefined
	// 💣 We won't be needing the search anymore after we extract the filters
	const search = searchParams.get('q') || undefined
	// 🐨 Extract the pagination object alongside the products
	const [{ products }, { categories }, { brands }] = await Promise.all([
		// 🐨 Let's replace the search here with our filters
		getProducts({ search }),
		getAllCategories(),
		getAllBrands(),
	])

	return {
		products,
		// 🐨 Return the pagination object as well
		categories,
		brands,
	}
}

export default function ProductsPage({ loaderData }: Route.ComponentProps) {
	const { products } = loaderData
	// 💣 We won't be needing these manual state filters anymore, we are using the url!
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [selectedBrand, setBrand] = useState('All')
	const [priceRange, setPriceRange] = useState([0, 300])
	const [sortBy, setSortBy] = useState('name')
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
	const [showFilters, setShowFilters] = useState(false)
	// 💣 The products are already filtered server-side, we can remove this!
	const filteredProducts = products
	const [searchParams, setSearchParams] = useSearchParams()
	const navigation = useNavigation()
	// 🐨 There are 3 states in useNavigation, "idle" | "submitting" | "loading", let's
	// 🐨 use that to determine if the page is loading
	// 💰  it's easier to use "!=="
	const isPageLoading = false
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
								{/** 🐨 Add the total number of products */}
								{/** 💰 loaderData.pagination.totalCount */}
								{} products total ({/** 🐨 Add the shown number of products */}
								{/** 💰 products.length */}
								{} shown)
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
								name="perPage"
								onChange={(e) =>
									setSearchParams((prev) => {
										// 💰 Let's use this approach for sortBy as well
										const newParams = new URLSearchParams(prev)
										newParams.set('perPage', e.target.value)
										newParams.delete('page') // Reset page when changing limit
										return newParams
									})
								}
								defaultValue={searchParams.get('perPage') || '9'}
								className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:ring-2 focus:ring-amber-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
							>
								<option value="9">Show 9</option>
								<option value="12">Show 12</option>
								<option value="24">Show 24</option>
								<option value="48">Show 48</option>
								<option value="96">Show 96</option>
							</select>
							<select
								// 🐨 Let's do the same for sortBy as it's done with perPage select!
								// 💰 Remove the value and onChange and use perPage as reference!
								// 💰 Don't forget to set the name to be perPage
								// 💰 Default value also should be set!
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
						className={`relative lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}
					>
						{/* 💰 We have this extracted out method built by Kelly */}
						<ProductFilters isPageLoading={isPageLoading} />
					</div>

					{/* Products Grid/List */}
					<div className="flex-1">
						{viewMode === 'grid' ? (
							<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
								{/* 🐨 We don't want to use the "filteredProducts" anymore */}
								{filteredProducts.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						) : (
							<div className="space-y-6">
								{/* 🐨 We don't want to use the "filteredProducts" anymore */}
								{filteredProducts.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						)}
						{/* 🐨 We don't want to use the "filteredProducts" anymore */}
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
