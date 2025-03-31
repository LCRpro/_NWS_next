import { db } from "@/db";
import { articles } from "@/db/schema";
import Link from "next/link";

export default async function BlogPage() {
  const allArticles = await db.select().from(articles);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Liste des articles 📝</h1>
      <ul className="space-y-2">
        {allArticles.map((article) => (
          <li key={article.id} className="border p-4 rounded">
            <Link href={`/blog/${article.id}`} className="text-xl hover:underline">
              Titre : {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
