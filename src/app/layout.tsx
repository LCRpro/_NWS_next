import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NEXT NWS",
  description: "NEXT NWS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <nav className="bg-gray-800 p-4 text-white flex gap-4">
          <Link href="/" className="hover:underline">Accueil</Link>
          <Link href="/a-propos" className="hover:underline">À propos</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
