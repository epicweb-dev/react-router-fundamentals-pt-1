import { db } from '#app/db.server.js'
import { brands, categories, products } from '../data/products.js'

function buildProductCatalog(targetCount: number) {
  const extendedProducts = [...products]

  if (extendedProducts.length >= targetCount) {
    return extendedProducts.slice(0, targetCount)
  }

  const suffixes = ['Pulse', 'Edge', 'Flex', 'Prime', 'Lite']
  let cloneIndex = 0

  while (extendedProducts.length < targetCount) {
    const template = products[cloneIndex % products.length]
    const suffix = suffixes[cloneIndex % suffixes.length]
    const nextId = (extendedProducts.length + 1).toString()
    const priceOffset = ((cloneIndex % 5) - 2) * 5
    const baseRating = template.rating - 0.1 * (cloneIndex % 3)

    const clonedProduct = {
      ...template,
      id: nextId,
      name: `${template.name} ${suffix}`,
      price: Number((template.price + priceOffset).toFixed(2)),
      rating: Math.max(3.5, Math.min(5, Number(baseRating.toFixed(1)))),
      reviews: template.reviews + (cloneIndex + 1) * 25,
      description: `${template.description} ${suffix} edition.`,
      sizes: [...template.sizes],
      colors: [...template.colors],
    }

    extendedProducts.push(clonedProduct)
    cloneIndex += 1
  }

  return extendedProducts
}

async function seed() {
  console.log('Seeding database...')
  console.time('Database seeded')

  await db.variation.deleteMany()
  await db.productReview.deleteMany()
  await db.product.deleteMany()
  await db.category.deleteMany()
  await db.brand.deleteMany()

  const categoryNames = categories.filter((name) => name !== 'All')
  const brandNames = brands.filter((name) => name !== 'All')

  const categoryMap = new Map<string, string>()
  for (const name of categoryNames) {
    const category = await db.category.create({ data: { name } })
    categoryMap.set(name, category.id)
  }

  const brandMap = new Map<string, string>()
  for (const name of brandNames) {
    const brand = await db.brand.create({ data: { name } })
    brandMap.set(name, brand.id)
  }

  const catalog = buildProductCatalog(20)

  let productIndex = 0
  for (const product of catalog) {
    const categoryId = categoryMap.get(product.category)
    const brandId = brandMap.get(product.brand)

    if (!categoryId || !brandId) {
      throw new Error(`Missing category or brand for product ${product.name}`)
    }

    const createdProduct = await db.product.create({
      data: {
        id: product.id,
        name: product.name,
        description: product.description,
        imageUrl: product.image,
        categoryId,
        brandId,
      },
    })



    const baseQuantity = product.inStock ? 15 + (productIndex % 4) * 5 : 0
    const variations = []

    for (const color of product.colors) {
      for (const size of product.sizes) {
        variations.push({
          productId: createdProduct.id,
          color,
          size,
          price: product.price,
          quantity: baseQuantity,
        })
      }
    }

    if (variations.length > 0) {
      await db.variation.createMany({ data: variations })
      const createdVariations = await db.variation.findMany({
        where: { productId: createdProduct.id }
      })
      for (const v of createdVariations) {
        await db.productReview.create({
          data: { productId: createdProduct.id, rating: Math.ceil(Math.random() * 4 + 1), variationId: v.id }
        })
      }
    }

    productIndex += 1
  }

  console.timeEnd('Database seeded')
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await db.$disconnect()
  })
