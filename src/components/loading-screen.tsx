"use client";

import { AppleHelloEnglishEffect } from "@/components/ui/shadcn-io/apple-hello-effect";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black text-white">
      <AppleHelloEnglishEffect speed={1.1} onAnimationComplete={onComplete} />
    </div>
  );
}
