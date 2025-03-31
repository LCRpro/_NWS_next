"use client";

import Lottie from "lottie-react";
import animationData from "@/lottie/404.json";

export default function Lottie404() {
  return <Lottie animationData={animationData} loop={true} className="w-96 h-96" />;
}
