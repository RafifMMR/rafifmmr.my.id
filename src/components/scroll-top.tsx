"use client";

import { ChevronUpIcon } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ScrollTop({
  className,
  ...props
}: React.ComponentProps<"button">) {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= 400);

    const prev = scrollY.getPrevious() ?? 0;
    const diff = latestValue - prev;
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return (
    <AnimatePresence>
      {visible && (
        <Button
          key="scroll-top"
          className={cn(
            "[--bottom:1rem] lg:[--bottom:2rem]",
            "fixed right-4 bottom-[calc(var(--bottom,1rem)+env(safe-area-inset-bottom,0px))] z-50 lg:right-8",
            className
          )}
          variant="secondary"
          size="icon:lg"
          asChild
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          {...props}
        >
          <motion.button
            initial={{ opacity: 0, y: 16 }}
            animate={{
              opacity: scrollDirection === "up" ? 1 : 0.3,
              y: 0,
            }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ChevronUpIcon className="size-6" />
            <span className="sr-only">Scroll to top</span>
          </motion.button>
        </Button>
      )}
    </AnimatePresence>
  );
}
