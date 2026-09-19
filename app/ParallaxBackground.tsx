"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

/* Reproduces the reference band's Squarespace background effect:
   { type: "parallax", rotation: 90, intensity: 6 }  →  amount = 0.03.
   The photo is zoomed in by 1/(1 − amount) and drifts vertically as the band
   crosses the viewport, easing 10% of the way to its target each frame. */
const AMOUNT = 0.03;
const SCALE = 1 / (1 - AMOUNT);
const IMG_W = 1500;
const IMG_H = 927;

export default function ParallaxBackground({ src }: { src: string }) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    const section = layer?.parentElement;
    if (!layer || !section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let current = 0.5;
    let target = 0.5;
    let immediate = true;
    let frame = 0;

    // 0 when the band's top enters at the bottom of the viewport,
    // 1 when its bottom leaves at the top.
    const progress = () => {
      const r = section.getBoundingClientRect();
      const vh = window.innerHeight;
      return Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
    };

    const render = () => {
      const { width, height } = section.getBoundingClientRect();
      // Size the layer to the whole cover-fitted photo, not just the band, so
      // its hidden overflow always exceeds the drift and the band's dark
      // background never shows at the top or bottom edge. The 1px bleed on
      // each side keeps anti-aliasing from leaving a seam.
      const cover = Math.max((width + 2) / IMG_W, (height + 2) / IMG_H);
      const coverW = IMG_W * cover;
      const coverH = IMG_H * cover;
      const shift = (AMOUNT / 2 - AMOUNT * current) * (coverH * SCALE);
      Object.assign(layer.style, {
        left: `${(width - coverW) / 2}px`,
        top: `${(height - coverH) / 2}px`,
        width: `${coverW}px`,
        height: `${coverH}px`,
        transform: `translate3d(0, ${shift.toFixed(2)}px, 0) scale(${SCALE})`,
      });
    };

    const step = () => {
      frame = 0;
      const gap = target - current;
      // Same rule as the reference: ease forward, snap on small or backward moves.
      current = immediate || gap < 0.01 ? target : current + 0.1 * gap;
      immediate = false;
      render();
      if (current !== target) frame = requestAnimationFrame(step);
    };

    const update = () => {
      target = reduceMotion.matches ? 0.5 : progress();
      if (!frame) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        immediate = true;
        update();
      }
    });

    observer.observe(section);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={layerRef}
      aria-hidden
      className="absolute inset-0 will-change-transform"
      style={{ transform: `scale(${SCALE})` }}
    >
      <Image
        src={src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
    </div>
  );
}
