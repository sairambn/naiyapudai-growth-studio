import { useEffect, useRef, useState, type RefObject } from "react";

/** Smoothstep 0→1 */
export function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

/** Ease out cubic */
export function easeOutCubic(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return 1 - Math.pow(1 - x, 3);
}

/** Ease out expo — long tail, cinematic settle */
export function easeOutExpo(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
}

function sectionProgress(el: HTMLElement): number {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || 1;
  const total = rect.height + vh;
  if (total <= 0) return 0;
  const traveled = vh - rect.top;
  return Math.min(1, Math.max(0, traveled / total));
}

/**
 * Tracks scroll progress of a section with **lerped** values (buttery).
 * Uses RAF + direct style writes when `onFrame` is provided — avoids setState every frame.
 */
export function useScrollProgress<T extends HTMLElement = HTMLElement>(options?: {
  offsetStart?: number;
  offsetEnd?: number;
  /** 0.05–0.25 typical. Higher = snappier. */
  lerp?: number;
  /** If true, also drive React state (for opacity text etc). Default true. */
  reactive?: boolean;
}): [RefObject<T | null>, number] {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);
  const start = options?.offsetStart ?? 0;
  const end = options?.offsetEnd ?? 1;
  const lerpAmt = options?.lerp ?? 0.12;
  const reactive = options?.reactive !== false;

  const current = useRef(0);
  const target = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let running = true;

    const read = () => {
      const p = sectionProgress(el);
      const mapped = (p - start) / (end - start || 1);
      target.current = Math.min(1, Math.max(0, mapped));
    };

    const tick = () => {
      if (!running) return;
      read();
      const prev = current.current;
      current.current += (target.current - current.current) * lerpAmt;
      // snap when close
      if (Math.abs(target.current - current.current) < 0.0008) {
        current.current = target.current;
      }
      if (reactive && Math.abs(current.current - prev) > 0.0005) {
        setProgress(current.current);
      }
      raf = requestAnimationFrame(tick);
    };

    read();
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [start, end, lerpAmt, reactive]);

  return [ref, progress];
}

/**
 * Multi-layer parallax: register elements with transform/opacity mappers.
 * Drives styles on RAF without React re-renders.
 */
export function useScrollLayers<T extends HTMLElement = HTMLElement>(options?: { lerp?: number }) {
  const sectionRef = useRef<T | null>(null);
  type Layer = {
    el: HTMLElement;
    map: (p: number) => { transform?: string; opacity?: number };
  };
  const layersRef = useRef<Layer[]>([]);

  const register = (
    el: HTMLElement | null,
    map: (p: number) => { transform?: string; opacity?: number },
  ) => {
    if (!el) return;
    layersRef.current = layersRef.current.filter((l) => l.el !== el);
    layersRef.current.push({ el, map });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const lerpAmt = options?.lerp ?? 0.14;
    let current = 0;
    let target = 0;
    let raf = 0;
    let running = true;

    const read = () => {
      target = sectionProgress(section);
    };

    const tick = () => {
      if (!running) return;
      read();
      current += (target - current) * lerpAmt;
      if (Math.abs(target - current) < 0.0005) current = target;
      for (const layer of layersRef.current) {
        const style = layer.map(current);
        if (style.transform !== undefined) layer.el.style.transform = style.transform;
        if (style.opacity !== undefined) layer.el.style.opacity = String(style.opacity);
      }
      raf = requestAnimationFrame(tick);
    };

    read();
    raf = requestAnimationFrame(tick);
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read, { passive: true });
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
    };
  }, [options?.lerp]);

  return { sectionRef, register };
}

export function useDocumentScroll(lerp = 0.1): number {
  const [p, setP] = useState(0);
  const current = useRef(0);
  const target = useRef(0);

  useEffect(() => {
    let raf = 0;
    let running = true;
    const read = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target.current = max <= 0 ? 0 : window.scrollY / max;
    };
    const tick = () => {
      if (!running) return;
      current.current += (target.current - current.current) * lerp;
      setP(current.current);
      raf = requestAnimationFrame(tick);
    };
    read();
    window.addEventListener("scroll", read, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", read);
    };
  }, [lerp]);

  return p;
}
