import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl mb-4">Bienvenue sur accueil</h1>
      <Image
        src="/img.jpg"
        alt="img"
        width={800}
        height={600}
        priority
        className="rounded shadow-lg"
      />
    </div>
  );
}
