"use client";

import { useEffect, useState } from "react";

export default function CatFactSuspended() {
  const [fact, setFact] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFact() {
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFact(data.fact);
    }
    fetchFact();
  }, []);

  return (
    <div className="text-center text-lg mt-4">
      🐱 <strong>Fait amusant :</strong> {fact}
    </div>
  );
}
