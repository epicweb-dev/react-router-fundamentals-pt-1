import { db } from "#app/db.server.js";
import { type ProductSelect } from "#app/generated/prisma/models.ts";


const productShortInfoSelect = {
  id: true,
  name: true,
  description: true,
  imageUrl: true,
  price: true,
  brand: {
    select: {
      id: true,
      name: true
    },
  },
  reviewScore: true,
  _count: {
    select: {
      reviews: true,
    },
  },
} as const satisfies ProductSelect


export async function getProducts() {

  // Get products with pagination
  const products = await db.product.findMany({
    select: productShortInfoSelect,
  });

  return {
    products,
  };
}

export async function getProductById(id: string) {
  const product = await db.product.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      description: true,
      imageUrl: true,
      price: true,
      reviewScore: true,
      category: {
        select: {
          id: true,
          name: true
        },
      },
      brand: {
        select: {
          id: true,
          name: true
        },
      },
      reviews: {
        select: {
          id: true,
          rating: true,
          comment: true,
        }
      },
      variations: {
        select: {

          color: true,
          size: true,
          id: true,
          quantity: true,

        }
      }
    }
  });
  return product;
}

export async function getRelatedProducts(productId: string, categoryId: string | undefined, brandId: string | undefined) {
  const products = await db.product.findMany({
    where: {
      id: { not: productId },
      OR: [
        { categoryId: categoryId },
        { brandId: brandId }
      ]
    },
    select: productShortInfoSelect,
    take: 4
  });
  return products;
}

export type ProductCardInfo = Awaited<ReturnType<typeof getProducts>>['products'][number];