import { db } from "#app/db.server.js";

export const getAllCategories = async () => {
  const categories = await db.category.findMany({
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });
  return categories;
}