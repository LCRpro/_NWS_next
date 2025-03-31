"use client";

import Lottie from "lottie-react";
import animationData from "@/lottie/404.json";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <Lottie animationData={animationData} loop={true} className="w-96 h-96" />
      <h1 className="text-4xl font-bold mt-4">Erreur 404</h1>
      <p className="text-lg text-gray-600 mt-2">La page que vous cherchez n’existe pas.</p>
    </div>
  );
}
