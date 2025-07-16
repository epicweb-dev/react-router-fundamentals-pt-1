import React, { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ArrowLeft, Star, Heart, Truck, Shield, RefreshCw, Plus, Minus } from 'lucide-react';
import { products } from '../../data/products';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-stone-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-light text-gray-900 dark:text-white mb-4">
            Product not found
          </h2>
          <Link
            to="/products"
            className="text-amber-600 dark:text-amber-500 hover:underline"
          >
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }



    alert('Added to cart!');
  };

  // Mock additional images for gallery
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  const relatedProducts = products.filter(p =>
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="bg-stone-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link to="/products" className="hover:text-amber-600 dark:hover:text-amber-500 flex items-center">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={productImages[activeImage]}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-w-1 aspect-h-1 bg-white dark:bg-gray-800 rounded-lg overflow-hidden border-2 transition-colors duration-200 ${activeImage === index
                    ? 'border-amber-500'
                    : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-amber-600 dark:text-amber-500 font-medium mb-2">
                {product.brand}
              </div>
              <h1 className="text-3xl font-light text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating)
                        ? 'text-amber-500 fill-current'
                        : 'text-gray-300 dark:text-gray-600'
                        }`}
                    />
                  ))}
                  <span className="text-sm font-medium text-gray-900 dark:text-white ml-2">
                    {product.rating}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                ${product.price}
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Size</h3>
              <div className="grid grid-cols-6 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 border rounded-lg text-center transition-colors duration-200 ${selectedSize === size
                      ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-amber-300 dark:hover:border-amber-700'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-lg transition-colors duration-200 ${selectedColor === color
                      ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-amber-300 dark:hover:border-amber-700'
                      }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 text-gray-900 dark:text-white font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-4 px-6 rounded-lg font-medium transition-colors duration-300 hover:shadow-lg"
              >
                Add to Cart
              </button>
              <button className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                <Heart className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Truck className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RefreshCw className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">30-Day Returns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">2-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-12 text-center">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-500 fill-current" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {relatedProduct.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-amber-600 dark:text-amber-500 font-medium mb-2">
                      {relatedProduct.brand}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                      {relatedProduct.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        ${relatedProduct.price}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {relatedProduct.reviews} reviews
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};