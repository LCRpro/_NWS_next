import Lottie404 from "@/components/Lottie404";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <Lottie404 />
      <h1 className="text-4xl font-bold mt-4">Erreur 404</h1>
      <p className="text-lg text-gray-600 mt-2">La page que vous cherchez n’existe pas.</p>
    </div>
  );
}
