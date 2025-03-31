import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const metadata: Metadata = {
  title: "NEXT NWS",
  description: "NEXT NWS",
};

const JWT_SECRET = process.env.JWT_SECRET!;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies(); // ✅ await ici
  const token = cookieStore.get("auth_token")?.value;
  let username: string | null = null;

  try {
    if (token) {
      const payload = jwt.verify(token, JWT_SECRET) as { username: string };
      username = payload.username;
    }
  } catch {
    username = null;
  }

  return (
    <html lang="fr">
      <body>
        <nav className="bg-gray-800 p-4 text-white flex gap-4">
          <Link href="/" className="hover:underline">Accueil</Link>
          <Link href="/a-propos" className="hover:underline">À propos</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/pagea" className="hover:underline">Page A</Link>
          <Link href="/pageb" className="hover:underline">Page B</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>

          {username ? (
            <>
              <Link href="/admin" className="hover:underline">Admin</Link>
              <form action="/logout" method="POST">
                <button type="submit" className="hover:underline">Déconnexion</button>
              </form>
            </>
          ) : (
            <>
              <Link href="/login" className="hover:underline">Connexion</Link>
              <Link href="/register" className="hover:underline">Créer un compte</Link>
            </>
          )}
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
