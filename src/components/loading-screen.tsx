"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 sm:mb-8">
          <p className="mb-8 text-sm font-bold tracking-[0.2em] text-gray-400 sm:mb-12 sm:text-base sm:tracking-[0.3em] md:text-lg">
            LOADING...
          </p>
        </div>

        <div className="relative mb-6 sm:mb-8">
          <span className="text-6xl leading-none font-light text-white sm:text-7xl md:text-8xl lg:text-[8rem] xl:text-[10rem]">
            {progress}%
          </span>
        </div>

        <div className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div className="h-0.5 overflow-hidden rounded-full bg-gray-800">
            <div
              className="h-full bg-white transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
