import { db } from "@/db";
import { articles } from "@/db/schema";
import { AddArticleForm } from "@/components/AddArticleForm";
import { EditArticleForm } from "@/components/EditArticleForm";


import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export default async function AdminPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) return <p>Accès refusé</p>;

  try {
    jwt.verify(token, JWT_SECRET);
  } catch {
    return <p>Token invalide</p>;
  }

  const allArticles = await db.select().from(articles);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Blog</h1>

      <AddArticleForm />
      <hr className="my-6" />

      <h2 className="text-xl font-semibold mb-2">Modifier un article</h2>
      {allArticles.map((article) => (
        <EditArticleForm key={article.id} article={article} />
      ))}
    </div>
  );
}
