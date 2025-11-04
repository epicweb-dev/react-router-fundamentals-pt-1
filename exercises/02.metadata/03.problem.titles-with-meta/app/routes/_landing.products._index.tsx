import { Filter, Grid, List, Star, Heart } from 'lucide-react'
import { useState, useMemo } from 'react'
import { Link } from 'react-router'
// 💰 You will need these utilities! Feel free to check their implementation first!
import {
	getMetaFromMatches,
	getMetaTitle,
	constructPrefixedTitle,
} from '#app/utils/metadata.js'
import { products, categories, brands } from '../../data/products'
import { type Route } from './+types/_landing.products._index'

// 🐨 We want to include the root meta in the title to have Epic Shop | All Products
export const meta: Route.MetaFunction = ({ matches }) => {
	// 💰 You can use getMetaFromMatches and specify "root" to extract the meta information from root
	// 💰 You can use getMetaTitle to extract the title from the root meta information
	return [
		{
			// 💰 You can use constructPrefixedTitle to create the title with the prefix you provide
		},
	]
}
export default function ProductsPage() {
	const [selectedCategory, setSelectedCategory] = useState('All')
	const [selectedBrand, setBrand] = useState('All')
	const [priceRange, setPriceRange] = useState([0, 300])
	const [sortBy, setSortBy] = useState('name')
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
	const [showFilters, setShowFilters] = useState(false)

	const filteredProducts = useMemo(() => {
		let filtered = products.filter((product) => {
			const categoryMatch =
				selectedCategory === 'All' || product.category === selectedCategory
			const brandMatch =
				selectedBrand === 'All' || product.brand === selectedBrand
			const priceMatch =
				product.price >= priceRange[0] && product.price <= priceRange[1]

			return categoryMatch && brandMatch && priceMatch
		})

		// Sort products
		filtered.sort((a, b) => {
			switch (sortBy) {
				case 'price-low':
					return a.price - b.price
				case 'price-high':
					return b.price - a.price
				case 'rating':
					return b.rating - a.rating
				case 'name':
				default:
					return a.name.localeCompare(b.name)
			}
		})

		return filtered
	}, [selectedCategory, selectedBrand, priceRange, sortBy])

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
											key={category}
											onClick={() => setSelectedCategory(category)}
											className={`block w-full rounded-lg px-3 py-2 text-left transition-colors duration-200 ${
												selectedCategory === category
													? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
													: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
											}`}
										>
											{category}
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
											key={brand}
											onClick={() => setBrand(brand)}
											className={`block w-full rounded-lg px-3 py-2 text-left transition-colors duration-200 ${
												selectedBrand === brand
													? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
													: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
											}`}
										>
											{brand}
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
									<div
										key={product.id}
										className="group overflow-hidden rounded-lg bg-white transition-all duration-300 hover:scale-105 hover:transform hover:shadow-xl dark:bg-gray-800"
									>
										<div className="relative overflow-hidden">
											<Link to={`/products/${product.id}`}>
												<img
													src={product.image}
													alt={product.name}
													className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
												/>
											</Link>
											<button className="absolute top-4 right-4 rounded-full bg-white p-2 shadow-lg transition-colors duration-200 hover:bg-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800">
												<Heart className="h-4 w-4 text-gray-600 dark:text-gray-400" />
											</button>
											<div className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 dark:bg-gray-900">
												<div className="flex items-center space-x-1">
													<Star className="h-4 w-4 fill-current text-amber-500" />
													<span className="text-sm font-medium text-gray-900 dark:text-white">
														{product.rating}
													</span>
												</div>
											</div>
										</div>
										<div className="p-6">
											<div className="mb-2 text-sm font-medium text-amber-600 dark:text-amber-500">
												{product.brand}
											</div>
											<Link to={`/products/${product.id}`}>
												<h3 className="mb-2 text-lg font-medium text-gray-900 transition-colors duration-300 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-500">
													{product.name}
												</h3>
											</Link>
											<p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
												{product.description}
											</p>
											<div className="flex items-center justify-between">
												<span className="text-xl font-bold text-gray-900 dark:text-white">
													${product.price}
												</span>
												<span className="text-sm text-gray-500 dark:text-gray-400">
													{product.reviews} reviews
												</span>
											</div>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="space-y-6">
								{filteredProducts.map((product) => (
									<div
										key={product.id}
										className="overflow-hidden rounded-lg bg-white transition-shadow duration-300 hover:shadow-lg dark:bg-gray-800"
									>
										<div className="flex flex-col md:flex-row">
											<div className="relative overflow-hidden md:w-64">
												<Link to={`/products/${product.id}`}>
													<img
														src={product.image}
														alt={product.name}
														className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105 md:h-full"
													/>
												</Link>
											</div>
											<div className="flex-1 p-6">
												<div className="flex items-start justify-between">
													<div className="flex-1">
														<div className="mb-2 text-sm font-medium text-amber-600 dark:text-amber-500">
															{product.brand}
														</div>
														<Link to={`/products/${product.id}`}>
															<h3 className="mb-2 text-xl font-medium text-gray-900 transition-colors duration-300 hover:text-amber-600 dark:text-white dark:hover:text-amber-500">
																{product.name}
															</h3>
														</Link>
														<p className="mb-4 text-gray-600 dark:text-gray-300">
															{product.description}
														</p>
														<div className="mb-4 flex items-center space-x-4">
															<div className="flex items-center space-x-1">
																<Star className="h-4 w-4 fill-current text-amber-500" />
																<span className="text-sm font-medium text-gray-900 dark:text-white">
																	{product.rating}
																</span>
																<span className="text-sm text-gray-500 dark:text-gray-400">
																	({product.reviews} reviews)
																</span>
															</div>
														</div>
													</div>
													<div className="ml-6 text-right">
														<div className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
															${product.price}
														</div>
														<button className="rounded-full bg-gray-100 p-2 transition-colors duration-200 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
															<Heart className="h-5 w-5 text-gray-600 dark:text-gray-400" />
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
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
