"use client";

import { useState, useTransition } from "react";
import { sendContactForm } from "./actions";
import toast, { Toaster } from "react-hot-toast";

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    toast.promise(
      new Promise((resolve, reject) => {
        startTransition(async () => {
          const result = await sendContactForm(new FormData(form));

          if (result.success) {
            resolve("Message envoyé !");
            form.reset();
          } else {
            reject(result.errors.join("\n"));
          }
        });
      }),
      {
        loading: "Envoi du message...",
        success: (msg) => msg,
        error: (err) => err,
      }
    );
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6">Contact</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          placeholder="Votre nom"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Votre email"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          className="w-full p-2 border rounded"
          rows={5}
          required
        ></textarea>

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {isPending ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>
    </div>
  );
}
