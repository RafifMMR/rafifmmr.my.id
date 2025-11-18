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
        "inline-flex flex-col items-start sm:flex-row sm:items-center",
        "gap-1 px-2 py-1 sm:gap-1.5 sm:px-2.5 sm:py-1 md:gap-2 md:px-3 md:py-1.5",
        "rounded-md border border-edge bg-background/80",
        "font-mono text-[10px] text-foreground sm:text-xs md:text-xs",
        "backdrop-blur-sm",
        className
      )}
    >
      <div className="inline-flex items-center gap-1 sm:hidden">
        <span className="font-semibold">{time}</span>
        <span className="text-muted-foreground">{utcOffset}</span>
        <span className="text-muted-foreground">·</span>
      </div>
      <div className="hidden items-center gap-1 sm:inline-flex sm:gap-1.5 md:gap-2">
        <span className="font-semibold">{time}</span>
        <span className="text-muted-foreground">{utcOffset}</span>
        <span className="text-muted-foreground">·</span>
        <span className="text-muted-foreground">{location}</span>
      </div>
      <span className="text-muted-foreground sm:hidden">{location}</span>
    </div>
  );
}
