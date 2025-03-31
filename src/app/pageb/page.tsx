import { Suspense } from "react";
import ChatFact from "@/components/ChatFactT";
import Spinner from "@/components/Spinner";
import { getCatFact } from "@/lib/getCatFact";

export default function ChatPage() {
  const factPromise = getCatFact();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Un fait amusant sur les chats 😺</h1>
      <Suspense fallback={<Spinner />}>
        <ChatFact factPromise={factPromise} />
      </Suspense>
    </div>
  );
}
