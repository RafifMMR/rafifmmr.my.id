"use client";

import type { MotionProps } from "motion/react";
import { motion, useScroll } from "motion/react";

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
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[1.5px] origin-left bg-gradient-to-r from-[#FF6461]/30 via-[#FF6461]/70 to-[#FF6461]/100 backdrop-blur-sm",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}

// "fixed inset-x-0 top-0 z-50 h-0 origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
