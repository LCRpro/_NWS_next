import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies(); 
  cookieStore.delete("auth_token");   

  return NextResponse.redirect(
    new URL("/", process.env.NEXT_PUBLIC_BASE_URL || "https://nextnws-weld.vercel.app/")
  );
}
