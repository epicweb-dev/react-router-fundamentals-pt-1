import { ShoppingBag } from "lucide-react"
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-stone-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <ShoppingBag className="w-7 h-7 text-amber-600 dark:text-amber-500" />
              <span className="text-xl font-light text-gray-900 dark:text-white tracking-wide">
                EpicStore
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed max-w-md">
              Your premier destination for premium epic products. Discover the perfect product that combines
              style, comfort, and quality craftsmanship.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Shop
            </h3>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 font-light transition-colors duration-300">All Products</Link></li>
              <li><Link to="/products?category=Running" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 font-light transition-colors duration-300">Running</Link></li>
              <li><Link to="/products?category=Casual" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 font-light transition-colors duration-300">Casual</Link></li>
              <li><Link to="/products?category=Formal" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 font-light transition-colors duration-300">Formal</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white uppercase tracking-wider mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 font-light transition-colors duration-300">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 font-light transition-colors duration-300">Contact</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 font-light transition-colors duration-300">Terms of Service</Link></li>
              <li><Link to="/terms-of-use" className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-500 font-light transition-colors duration-300">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-stone-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 font-light">
            © 2025 EpicStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}