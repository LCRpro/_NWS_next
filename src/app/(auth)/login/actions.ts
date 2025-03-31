"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function loginUser(username: string, password: string) {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.username, username));

  if (!user) return { success: false, error: "Utilisateur introuvable" };

  const match = await bcrypt.compare(password, user.password);
  if (!match) return { success: false, error: "Mot de passe incorrect" };

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: "7d",
  });

  const cookieStore = await cookies();
  cookieStore.set("auth_token", token, { httpOnly: true });

  return { success: true };
}
