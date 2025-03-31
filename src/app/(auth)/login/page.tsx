"use client";

import { useState, useTransition } from "react";
import { loginUser } from "./actions";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    startTransition(async () => {
      const res = await loginUser(username, password);
      if (res.success) {
        router.push("/admin");
      } else {
        setError(res.error || "Erreur inconnue");
      }
    });
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="username"
          placeholder="Nom d'utilisateur"
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          className="w-full border p-2 rounded"
          required
        />
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          {isPending ? "Connexion..." : "Se connecter"}
        </button>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
