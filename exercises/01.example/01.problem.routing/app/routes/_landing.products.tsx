import { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { Filter, Grid, List, Star, Heart } from 'lucide-react';
import { products, categories, brands } from '../../data/products';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setBrand] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 300]);
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const brandMatch = selectedBrand === 'All' || product.brand === selectedBrand;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

      return categoryMatch && brandMatch && priceMatch;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, selectedBrand, priceRange, sortBy]);

  return (
    <div className="bg-stone-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-stone-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-light text-gray-900 dark:text-white tracking-tight">
                All Products
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {filteredProducts.length} products found
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-amber-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${selectedCategory === category
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Brand</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      onClick={() => setBrand(brand)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors duration-200 ${selectedBrand === brand
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Price Range</h3>
                <div className="space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="300"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="relative overflow-hidden">
                      <Link to={`/products/${product.id}`}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </Link>
                      <button className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-900 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                        <Heart className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-amber-500 fill-current" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-amber-600 dark:text-amber-500 font-medium mb-2">
                        {product.brand}
                      </div>
                      <Link to={`/products/${product.id}`}>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
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
                    className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-64 relative overflow-hidden">
                        <Link to={`/products/${product.id}`}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 md:h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="text-sm text-amber-600 dark:text-amber-500 font-medium mb-2">
                              {product.brand}
                            </div>
                            <Link to={`/products/${product.id}`}>
                              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2 hover:text-amber-600 dark:hover:text-amber-500 transition-colors duration-300">
                                {product.name}
                              </h3>
                            </Link>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                              {product.description}
                            </p>
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="flex items-center space-x-1">
                                <Star className="w-4 h-4 text-amber-500 fill-current" />
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                  {product.rating}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                  ({product.reviews} reviews)
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right ml-6">
                            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                              ${product.price}
                            </div>
                            <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200">
                              <Heart className="w-5 h-5 text-gray-600 dark:text-gray-400" />
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
              <div className="text-center py-16">
                <div className="text-gray-400 dark:text-gray-600 mb-4">
                  <Filter className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
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
  );
};