import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export default async function AdminPage() {
  const cookieStore = await cookies(); 
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return <p className="text-red-500">Accès refusé (non connecté)</p>;
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { username: string };

    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Espace admin</h1>
        <p className="text-lg">Bienvenue <strong>{payload.username}</strong> 👋</p>
      </div>
    );
  } catch {
    return <p className="text-red-500">Token invalide. Veuillez vous reconnecter.</p>;
  }
}
