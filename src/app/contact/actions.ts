"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export async function sendContactForm(formData: FormData) {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((e) => e.message);
    return { success: false, errors };
  }

  // simulate backend processing
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { success: true };
}
