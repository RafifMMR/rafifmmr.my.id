"use client";

import { useState } from "react";

import LoadingScreen from "./loading-screen";

export default function BootLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />;

  return <>{children}</>;
}
