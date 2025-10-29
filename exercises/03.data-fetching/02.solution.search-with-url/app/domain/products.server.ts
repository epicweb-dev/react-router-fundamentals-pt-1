import { db } from "#app/db.server.js";
import { type ProductWhereInput, type ProductSelect } from "#app/generated/prisma/models.ts";

interface ProductFilters {
  search?: string;
}

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

function createProductWhereClause(filters?: ProductFilters): ProductWhereInput {
  return {
    OR: filters?.search ? [
      { name: filters.search ? { contains: filters.search, } : undefined },
      { description: filters.search ? { contains: filters.search, } : undefined },
    ] : undefined,

  }
}


export async function getProducts(filters?: ProductFilters) {
  const whereClause = createProductWhereClause(filters);
  const products = await db.product.findMany({
    where: whereClause,
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