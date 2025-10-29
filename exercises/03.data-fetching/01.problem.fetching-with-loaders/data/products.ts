import { type getProductById, } from "#app/domain/products.server.ts"

export const products: NonNullable<Awaited<ReturnType<typeof getProductById>>>[] = [
	{
		id: '1',
		name: 'Air Max Revolution',
		price: 129.99,
		imageUrl:
			'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
		brand: {
			id: '1',
			name: 'SkyStep',
		},

		category: {
			id: '1',
			name: 'Running',
		},
		variations: [],
		description:
			'Revolutionary running shoes with advanced air cushioning technology for maximum comfort and performance.',

		reviewScore: 4.8,
		reviews: []
	},
	{
		id: '2',
		name: 'Air Max Revolution',
		price: 129.99,
		imageUrl:
			'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600',
		brand: {
			id: '1',
			name: 'SkyStep',
		},

		category: {
			id: '1',
			name: 'Running',
		},
		variations: [],
		description:
			'Revolutionary running shoes with advanced air cushioning technology for maximum comfort and performance.',

		reviewScore: 4.8,
		reviews: []
	},
]

export const categories = [
	'All',
	'Running',
	'Casual',
	'Athletic',
	'Lifestyle',
	'Hiking',
	'Comfort',
	'Formal',
]

export const brands = [
	'All',
	'SkyStep',
	'StreetWalk',
	'ProAthlete',
	'TimelessStep',
	'OutdoorPro',
	'VelocityRun',
	'SoftStep',
	'ExecutiveWear',
]
