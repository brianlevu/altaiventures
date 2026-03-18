"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "fade" | "scale";

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}

const hiddenStyles: Record<Variant, string> = {
  up: "translate3d(0, 24px, 0)",    // subtler 24px (was 40)
  fade: "none",
  scale: "scale(0.98)",
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // prefers-reduced-motion: skip animation entirely
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // easing-entrance-ease-out: ease-out curve for entrances
  const easing = "cubic-bezier(0.16, 1, 0.3, 1)";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : hiddenStyles[variant],
        transition: `opacity 600ms ${easing} ${delay}ms, transform 600ms ${easing} ${delay}ms`,
        willChange: visible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
