import { db } from "@/db";
import { articles } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  const { title, content } = await req.json();
  await db.insert(articles).values({ title, content });
  return Response.json({ success: true });
}

export async function PUT(req: Request) {
  const { id, title, content } = await req.json();
  await db
    .update(articles)
    .set({ title, content })
    .where(eq(articles.id, id));

  revalidatePath(`/blog/${id}`); // ✅ Invalidation ISR
  return Response.json({ success: true });
}
