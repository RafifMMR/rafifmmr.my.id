"use client";

import type { MotionProps } from "motion/react";
import { m, useScroll } from "motion/react";

import { cn } from "@/lib/utils";

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>;
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll({
    axis: "y",
  });

  return (
    <m.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[1.5px] origin-left bg-gradient-to-r from-[#F55636]/30 via-[#F55636]/70 to-[#F55636]/100 backdrop-blur-sm",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}
