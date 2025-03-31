"use client";

import { use } from "react";

export default function ChatFact({ factPromise }: { factPromise: Promise<{ fact: string }> }) {
  const data = use(factPromise);

  return (
    <div className="text-center text-lg mt-4">
      🐱 <strong>Fait amusant :</strong> {data.fact}
    </div>
  );
}
