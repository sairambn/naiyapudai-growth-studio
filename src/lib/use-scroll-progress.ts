import { useEffect, useState, useRef, type RefObject } from "react";

/**
 * Tracks 0→1 progress of an element through the viewport.
 * Used for scale, translate, and opacity driven by scroll.
 */
export function useScrollProgress<T extends HTMLElement = HTMLElement>(options?: {
  offsetStart?: number;
  offsetEnd?: number;
}): [RefObject<T | null>, number] {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);
  const start = options?.offsetStart ?? 0;
  const end = options?.offsetEnd ?? 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when element top hits bottom of viewport, 1 when bottom leaves top
      const total = rect.height + vh;
      const traveled = vh - rect.top;
      let p = total <= 0 ? 0 : traveled / total;
      p = Math.min(1, Math.max(0, p));
      // remap to offset window
      const mapped = (p - start) / (end - start || 1);
      setProgress(Math.min(1, Math.max(0, mapped)));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [start, end]);

  return [ref, progress];
}

/** Global document scroll 0→1 */
export function useDocumentScroll(): number {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max <= 0 ? 0 : window.scrollY / max);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return p;
}
