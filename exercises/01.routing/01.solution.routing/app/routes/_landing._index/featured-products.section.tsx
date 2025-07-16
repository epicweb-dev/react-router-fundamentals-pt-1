import { Link } from "react-router";
import { ArrowRight, Star } from "lucide-react";
import { products } from "data/products";

export const FeaturedProductsSection = () => {
  const featuredProducts = products.slice(0, 4);

  return (<div className="py-32 bg-white dark:bg-gray-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extralight text-gray-900 dark:text-white mb-6 tracking-tight">
          Featured Products
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
          Handpicked favorites from our premium collection
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group bg-stone-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full">
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
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                {product.name}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  ${product.price}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {product.reviews} reviews
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/products"
          className="group bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-medium tracking-wide transition-all duration-300 inline-flex items-center hover:shadow-lg hover:shadow-amber-600/25"
        >
          View All Products
          <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  </div>)
}