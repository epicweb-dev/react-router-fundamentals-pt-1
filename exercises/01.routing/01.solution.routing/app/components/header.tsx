import { Link, useLocation } from 'react-router';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
  const location = useLocation()
  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-stone-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <ShoppingBag className="w-8 h-8 text-amber-600 dark:text-amber-500" />
              <span className="text-2xl font-light text-gray-900 dark:text-white tracking-wide">
                EpicStore
              </span>
            </Link>
          </div>

          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isActive(item.href)
                    ? 'text-amber-600 dark:text-amber-500'
                    : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4">
                {/*  <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500 transition-colors duration-300">
                    <User className="w-5 h-5" />
                  </button>
                  <ShoppingCart /> */}

              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            {/*   <ShoppingCart /> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-2 pb-6 space-y-4 bg-white dark:bg-gray-900 border-t border-stone-200 dark:border-gray-700">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-base font-medium tracking-wide transition-colors duration-300 ${isActive(item.href)
                  ? 'text-amber-600 dark:text-amber-500'
                  : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-500'
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}