// lib/getCatFact.ts
export async function getCatFact(): Promise<{ fact: string }> {
    await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate delay
    const res = await fetch("https://catfact.ninja/fact", { cache: "no-store" });
    return res.json();
  }
  