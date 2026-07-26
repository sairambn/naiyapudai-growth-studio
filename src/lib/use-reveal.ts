import { useEffect, useRef } from "react";

/**
 * Adds `reveal-in` class when the element enters the viewport.
 * Element should start with the `reveal` utility class.
 */
export function useReveal<T extends HTMLElement = HTMLElement>(options?: {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("reveal-in");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            if (options?.once !== false) io.unobserve(entry.target);
          } else if (options?.once === false) {
            entry.target.classList.remove("reveal-in");
          }
        }
      },
      { threshold: options?.threshold ?? 0.12, rootMargin: options?.rootMargin ?? "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [options?.threshold, options?.rootMargin, options?.once]);
  return ref;
}
