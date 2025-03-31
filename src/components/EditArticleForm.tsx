"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

type Article = {
  id: number;
  title: string;
  content: string;
};

export function EditArticleForm({ article }: { article: Article }) {
  const [title, setTitle] = useState(article.title);
  const [content, setContent] = useState(article.content);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/article", {
      method: "PUT",
      body: JSON.stringify({ id: article.id, title, content }),
    });

    alert("Article mis à jour !");
  }

  return (
    <form onSubmit={handleUpdate} className="space-y-4 my-4 border-t pt-4">
      <input
        className="w-full border p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <RichTextEditor content={content} onChange={setContent} />
      <button className="bg-green-600 text-white px-4 py-2 rounded" type="submit">
        Mettre à jour
      </button>
    </form>
  );
}
