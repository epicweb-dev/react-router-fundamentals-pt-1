import { Link } from 'react-router'

const categories = [
	{
		name: 'Running',
		image:
			'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
		count: '25+ styles',
	},
	{
		name: 'Casual',
		image:
			'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=400',
		count: '30+ styles',
	},
	{
		name: 'Athletic',
		image:
			'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
		count: '20+ styles',
	},
	{
		name: 'Formal',
		image:
			'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
		count: '15+ styles',
	},
]

export const CategoriesSection = () => {
	return (
		<div className="bg-stone-50 py-32 dark:bg-gray-800">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="mb-20 text-center">
					<h2 className="mb-6 text-4xl font-extralight tracking-tight text-gray-900 dark:text-white">
						Shop by Category
					</h2>
					<p className="text-xl leading-relaxed font-light text-gray-600 dark:text-gray-300">
						Find the perfect shoes for every occasion and lifestyle
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{categories.map((category, index) => (
						<Link
							key={index}
							to={`/products?category=${category.name}`}
							className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-105 hover:transform hover:shadow-xl dark:bg-gray-900"
						>
							<div className="aspect-w-1 aspect-h-1">
								<img
									src={category.image}
									alt={category.name}
									className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
							<div className="absolute bottom-6 left-6 text-white">
								<h3 className="mb-1 text-2xl font-light">{category.name}</h3>
								<p className="text-sm opacity-90">{category.count}</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
