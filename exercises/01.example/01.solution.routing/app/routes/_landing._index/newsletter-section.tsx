
export const NewsletterSection = () => {
  return (<div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-extralight text-white mb-6 tracking-tight">
        Stay in the Loop
      </h2>
      <p className="text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-2xl mx-auto">
        Be the first to know about new arrivals, exclusive offers, and style tips.
      </p>
      <div className="max-w-md mx-auto flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-6 py-4 text-gray-900 bg-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-r-lg font-medium transition-colors duration-300">
          Subscribe
        </button>
      </div>
    </div>
  </div>)
}