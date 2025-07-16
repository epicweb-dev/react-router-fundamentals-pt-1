
import { Link } from "react-router"

const categories = [
  {
    name: 'Running',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: '25+ styles',
  },
  {
    name: 'Casual',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: '30+ styles',
  },
  {
    name: 'Athletic',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: '20+ styles',
  },
  {
    name: 'Formal',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
    count: '15+ styles',
  },
];

export const CategoriesSection = () => {
  return (<div className="py-32 bg-stone-50 dark:bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extralight text-gray-900 dark:text-white mb-6 tracking-tight">
          Shop by Category
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
          Find the perfect shoes for every occasion and lifestyle
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/products?category=${category.name}`}
            className="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-light mb-1">{category.name}</h3>
              <p className="text-sm opacity-90">{category.count}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>)
}