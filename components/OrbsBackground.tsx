"use client";

import { useEffect, useRef } from "react";

// Colores neón del tema (ver tailwind.config.ts -> colors.neon)
const COLORS = ["#7c3aed", "#93c5fd", "#3b82f6", "#c084fc", "#22d3ee", "#e0aaff"];

type Orb = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
};

/**
 * Fondo de "orbes" flotantes: puntitos de luz de colores que derivan
 * lentamente por la pantalla y se alejan suavemente del cursor.
 * Se desactiva en touch / prefers-reduced-motion (igual que Background.tsx).
 */
export default function OrbsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const isLite = window.matchMedia(
      "(pointer: coarse), (prefers-reduced-motion: reduce)"
    ).matches;
    if (isLite) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 55;
    const orbs: Orb[] = Array.from({ length: COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 1.5 + Math.random() * 3,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 0.35 + Math.random() * 0.45,
    }));

    let mouseX = -9999;
    let mouseY = -9999;
    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    function tick() {
      ctx!.clearRect(0, 0, width, height);
      for (const o of orbs) {
        // Deriva libre
        o.x += o.vx;
        o.y += o.vy;

        // Repulsión suave cerca del cursor
        const dx = o.x - mouseX;
        const dy = o.y - mouseY;
        const distSq = dx * dx + dy * dy;
        const radius = 120;
        if (distSq < radius * radius) {
          const dist = Math.sqrt(distSq) || 1;
          const force = (1 - dist / radius) * 0.6;
          o.x += (dx / dist) * force;
          o.y += (dy / dist) * force;
        }

        // Envuelve en los bordes
        if (o.x < -10) o.x = width + 10;
        if (o.x > width + 10) o.x = -10;
        if (o.y < -10) o.y = height + 10;
        if (o.y > height + 10) o.y = -10;

        ctx!.beginPath();
        ctx!.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx!.fillStyle = o.color;
        ctx!.globalAlpha = o.alpha;
        ctx!.shadowBlur = 8;
        ctx!.shadowColor = o.color;
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
    />
  );
}
