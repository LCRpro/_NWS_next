"use client";

import { Suspense, lazy } from "react";
import Spinner from "@/components/Spinner";
import { lazyWithSleep } from "@/components/FakeLazy";

const CatFact = lazy(lazyWithSleep(() => import("@/components/CatFactSuspended"), 3000));

export default function ChatPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Un fait amusant sur les chats 😺</h1>
      <Suspense fallback={<Spinner />}>
        <CatFact />
      </Suspense>
    </div>
  );
}
