"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { RafifMark } from "./rafif-mark";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <RafifMarkMotion /> : <RafifMark />;
}

function RafifMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 256"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 8,
      }}
      transition={{ duration: 0.3 }}
    >
      <svg
        width="251"
        height="255"
        viewBox="0 0 151 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20C0 8.9543 8.95431 0 20 0H100C127.614 0 150 22.3858 150 50V50C150 77.6142 127.614 100 100 100H0V20Z"
          fill="#0FF278"
        />
        <path
          d="M100.614 100L130.519 131.9L150.598 155H0.00012207V100H100.614Z"
          fill="#0FF278"
        />
        <rect
          width="35"
          height="65"
          rx="17.5"
          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 85.9619 85.7104)"
          fill="#1B1B1B"
        />
        <path d="M100 100L1 100" stroke="#0FF278" strokeWidth="2" />
      </svg>
    </motion.svg>
  );
}

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
