"use client";

import { useState } from "react";
import RichTextEditor from "./RichTextEditor";

export function AddArticleForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch("/api/article", {
      method: "POST",
      body: JSON.stringify({ title, content }),
    });

    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Créer un article</h2>
      <input
        placeholder="Titre"
        className="w-full border p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <RichTextEditor content={content} onChange={setContent} />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        Créer
      </button>
    </form>
  );
}
