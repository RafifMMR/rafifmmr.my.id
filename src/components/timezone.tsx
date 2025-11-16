"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface TimezoneBadgeProps {
  timeZone: string;
  location: string;
  utcOffset: string;
  className?: string;
}

export function TimezoneBadge({
  timeZone,
  location,
  utcOffset,
  className,
}: TimezoneBadgeProps) {
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone,
        hour12: false,
      });
      setTime(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5",
        "rounded-md border border-edge bg-background/80",
        "font-mono text-xs text-foreground",
        "backdrop-blur-sm",
        className
      )}
    >
      <span className="font-semibold">{time}</span>
      <span className="text-muted-foreground">
        {utcOffset} · {location}
      </span>
    </div>
  );
}
