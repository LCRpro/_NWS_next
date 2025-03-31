"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import bcrypt from "bcrypt";

export async function registerUser(username: string, password: string) {
  const hashed = await bcrypt.hash(password, 10);

  try {
    await db.insert(users).values({ username, password: hashed });
    return { success: true };
  }  catch {
    return { success: false, error: "Nom d'utilisateur déjà pris" };
  }
  
}
