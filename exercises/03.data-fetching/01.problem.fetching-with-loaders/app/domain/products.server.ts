import { db } from "#app/db.server.js";

export async function getProducts() {
  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      imageUrl: true,
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
          price: true,
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
          price: true,
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