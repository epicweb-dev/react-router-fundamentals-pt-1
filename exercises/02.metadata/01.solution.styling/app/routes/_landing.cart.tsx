import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router'

export default function CartPage() {
	const items: {
		id: number
		price: number
		image: string
		brand: string
		quantity: number
		name: string
		selectedSize: string
		selectedColor: string
	}[] = [
		{
			id: 1,
			price: 59.99,
			image:
				'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
			brand: 'Nike',
			quantity: 2,
			name: 'Air Max 270',
			selectedSize: '10',
			selectedColor: 'Black',
		},
		{
			id: 2,
			price: 89.99,
			image:
				'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=600',
			brand: 'Adidas',
			quantity: 1,
			name: 'Ultraboost 21',
			selectedSize: '9',
			selectedColor: 'White',
		},
	]
	const total = 0
	const itemCount = items.length
	const handleQuantityChange = (itemId: string, newQuantity: number) => {}

	const getItemId = (item: any) =>
		`${item.id}-${item.selectedSize}-${item.selectedColor}`

	if (items.length === 0) {
		return (
			<div className="min-h-screen bg-stone-50 dark:bg-gray-900">
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
					<div className="text-center">
						<ShoppingBag className="mx-auto mb-8 h-24 w-24 text-gray-300 dark:text-gray-600" />
						<h2 className="mb-4 text-3xl font-light text-gray-900 dark:text-white">
							Your cart is empty
						</h2>
						<p className="mb-8 text-gray-600 dark:text-gray-300">
							Looks like you haven't added any items to your cart yet.
						</p>
						<Link
							to="/products"
							className="inline-flex items-center rounded-lg bg-amber-600 px-8 py-3 font-medium text-white transition-colors duration-300 hover:bg-amber-700"
						>
							<ArrowLeft className="mr-2 h-5 w-5" />
							Continue Shopping
						</Link>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-stone-50 dark:bg-gray-900">
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-8 flex items-center justify-between">
					<div>
						<h1 className="text-3xl font-light text-gray-900 dark:text-white">
							Shopping Cart
						</h1>
						<p className="mt-2 text-gray-600 dark:text-gray-300">
							{itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart
						</p>
					</div>
					<Link
						to="/products"
						className="flex items-center text-amber-600 hover:underline dark:text-amber-500"
					>
						<ArrowLeft className="mr-1 h-4 w-4" />
						Continue Shopping
					</Link>
				</div>

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					{/* Cart Items */}
					<div className="space-y-6 lg:col-span-2">
						{items.map((item) => (
							<div
								key={getItemId(item)}
								className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800"
							>
								<div className="flex flex-col gap-6 md:flex-row">
									<div className="flex-shrink-0 md:h-32 md:w-32">
										<img
											src={item.image}
											alt={item.name}
											className="h-32 w-full rounded-lg object-cover"
										/>
									</div>
									<div className="flex-1">
										<div className="mb-4 flex items-start justify-between">
											<div>
												<h3 className="text-lg font-medium text-gray-900 dark:text-white">
													{item.name}
												</h3>
												<p className="text-sm font-medium text-amber-600 dark:text-amber-500">
													{item.brand}
												</p>
												<div className="mt-2 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
													<span>Size: {item.selectedSize}</span>
													<span>Color: {item.selectedColor}</span>
												</div>
											</div>
											<button
												onClick={() => getItemId(item)}
												className="p-2 text-gray-400 transition-colors duration-200 hover:text-red-500"
											>
												<Trash2 className="h-5 w-5" />
											</button>
										</div>
										<div className="flex items-center justify-between">
											<div className="flex items-center space-x-3">
												<button
													onClick={() =>
														handleQuantityChange(
															getItemId(item),
															item.quantity - 1,
														)
													}
													className="rounded border border-gray-300 p-1 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
												>
													<Minus className="h-4 w-4" />
												</button>
												<span className="w-8 text-center font-medium text-gray-900 dark:text-white">
													{item.quantity}
												</span>
												<button
													onClick={() =>
														handleQuantityChange(
															getItemId(item),
															item.quantity + 1,
														)
													}
													className="rounded border border-gray-300 p-1 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
												>
													<Plus className="h-4 w-4" />
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

						<div className="flex items-center justify-between border-t border-gray-200 pt-6 dark:border-gray-700">
							<button className="font-medium text-red-600 transition-colors duration-200 hover:text-red-700">
								Clear Cart
							</button>
						</div>
					</div>

					{/* Order Summary */}
					<div className="lg:col-span-1">
						<div className="sticky top-8 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
							<h2 className="mb-6 text-xl font-medium text-gray-900 dark:text-white">
								Order Summary
							</h2>

							<div className="mb-6 space-y-4">
								<div className="flex justify-between">
									<span className="text-gray-600 dark:text-gray-300">
										Subtotal
									</span>
									<span className="text-gray-900 dark:text-white">
										${total.toFixed(2)}
									</span>
								</div>
								<div className="flex justify-between">
									<span className="text-gray-600 dark:text-gray-300">
										Shipping
									</span>
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
								<div className="border-t border-gray-200 pt-4 dark:border-gray-700">
									<div className="flex justify-between">
										<span className="text-lg font-medium text-gray-900 dark:text-white">
											Total
										</span>
										<span className="text-lg font-bold text-gray-900 dark:text-white">
											$
											{(total + (total > 75 ? 0 : 9.99) + total * 0.08).toFixed(
												2,
											)}
										</span>
									</div>
								</div>
							</div>

							{total < 75 && (
								<div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/30">
									<p className="text-sm text-amber-800 dark:text-amber-200">
										Add ${(75 - total).toFixed(2)} more for free shipping!
									</p>
								</div>
							)}

							<button className="w-full rounded-lg bg-amber-600 px-6 py-3 font-medium text-white transition-colors duration-300 hover:bg-amber-700 hover:shadow-lg">
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
	)
}
