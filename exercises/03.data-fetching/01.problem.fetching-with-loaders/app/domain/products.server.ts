import { db } from "#app/db.server.js";

interface ProductFilters {
  category?: string[];
  brand?: string[];
  priceMin?: number;
  priceMax?: number;
  sortBy?: 'name' | 'price-low' | 'price-high' | 'rating';
}

export async function getProducts(filters?: ProductFilters) {
  const products = await db.product.findMany({
    where: {
      category: filters?.category && filters.category.length > 0 ? { name: { in: filters.category } } : undefined,
      brand: filters?.brand && filters.brand.length > 0 ? { name: { in: filters.brand } } : undefined,
      price: {
        gte: filters?.priceMin ?? 0,
        lte: filters?.priceMax ?? 300,
      },
    },
    orderBy: {
      name: filters?.sortBy === 'name' ? 'asc' : undefined,
      price: filters?.sortBy === 'price-low' ? 'asc' : filters?.sortBy === 'price-high' ? 'desc' : undefined,
    },
    select: {
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
      reviews: {
        select: {
          id: true,
          rating: true,
        },
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
  return products;
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

export type Product = Awaited<ReturnType<typeof getProducts>>[number];