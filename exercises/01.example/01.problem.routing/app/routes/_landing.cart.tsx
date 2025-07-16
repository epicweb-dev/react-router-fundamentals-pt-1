
import { Link } from 'react-router';
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';


export default function CartPage() {
  const items: {
    id: number, price: number, image: string, brand: string, quantity: number,
    name: string, selectedSize: string, selectedColor: string
  }[] = [
      {
        id: 1,
        price: 59.99,
        image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
        brand: 'Nike',
        quantity: 2,
        name: 'Air Max 270',
        selectedSize: '10',
        selectedColor: 'Black'
      },
      {
        id: 2,
        price: 89.99,
        image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
        brand: 'Adidas',
        quantity: 1,
        name: 'Ultraboost 21',
        selectedSize: '9',
        selectedColor: 'White'
      }

    ];
  const total = 0;
  const itemCount = items.length;
  const handleQuantityChange = (itemId: string, newQuantity: number) => {

  };

  const getItemId = (item: any) => `${item.id}-${item.selectedSize}-${item.selectedColor}`;

  if (items.length === 0) {
    return (
      <div className="bg-stone-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 text-gray-300 dark:text-gray-600 mx-auto mb-8" />
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/products"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-light text-gray-900 dark:text-white">Shopping Cart</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
          <Link
            to="/products"
            className="text-amber-600 dark:text-amber-500 hover:underline flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={getItemId(item)}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-32 md:h-32 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </h3>
                        <p className="text-sm text-amber-600 dark:text-amber-500 font-medium">
                          {item.brand}
                        </p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                          <span>Size: {item.selectedSize}</span>
                          <span>Color: {item.selectedColor}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => getItemId(item)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(getItemId(item), item.quantity - 1)}
                          className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-gray-900 dark:text-white font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(getItemId(item), item.quantity + 1)}
                          className="p-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          ${item.price} each
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
              <button

                className="text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm sticky top-8">
              <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="text-gray-900 dark:text-white">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                  <span className="text-gray-900 dark:text-white">
                    {total > 75 ? 'Free' : '$9.99'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Tax</span>
                  <span className="text-gray-900 dark:text-white">
                    ${(total * 0.08).toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium text-gray-900 dark:text-white">Total</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      ${(total + (total > 75 ? 0 : 9.99) + total * 0.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {total < 75 && (
                <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-6">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    Add ${(75 - total).toFixed(2)} more for free shipping!
                  </p>
                </div>
              )}

              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 hover:shadow-lg">
                Proceed to Checkout
              </button>

              <div className="mt-6 text-center">
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                  <span>🔒 Secure Checkout</span>
                  <span>📦 Free Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};