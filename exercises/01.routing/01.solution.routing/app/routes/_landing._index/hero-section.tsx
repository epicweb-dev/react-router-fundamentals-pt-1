import { ArrowRight, Star } from "lucide-react"
import { Link } from "react-router"

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f59e0b%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
              Step Into
              <span className="block text-amber-600 dark:text-amber-500 font-light italic">
                Excellence
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 font-light leading-relaxed">
              Discover premium footwear that combines unmatched comfort,
              timeless style, and exceptional craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/products"
                className="group bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 text-lg font-medium tracking-wide transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:shadow-amber-600/25"
              >
                Shop Collection
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/about"
                className="bg-transparent hover:bg-white dark:hover:bg-gray-800 text-gray-900 dark:text-white px-10 py-4 text-lg font-medium tracking-wide border border-gray-300 dark:border-gray-600 transition-all duration-300 hover:shadow-lg text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Premium Shoes"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3">
                <Star className="w-6 h-6 text-amber-500 fill-current" />
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}