"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number; hue: number; life: number; radius: number };

/**
 * Rastro de color que sigue al cursor (Canvas 2D, no WebGL).
 * Va DETRÁS de todo el contenido real (misma capa que Background/OrbsBackground),
 * así nunca tapa texto ni imágenes. El tono gira suavemente en vez de saltar
 * entre colores fijos, para que el rastro se vea continuo, no "a puntos".
 * Se desactiva en touch / prefers-reduced-motion.
 */
export default function FluidCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const skip = window.matchMedia(
      "(pointer: coarse), (prefers-reduced-motion: reduce)"
    ).matches;
    if (skip) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      // Clave: fijar el tamaño CSS explícitamente. Sin esto, en pantallas con
      // escalado (125%/150% en Windows) el canvas no coincide en tamaño con
      // el viewport y las coordenadas del mouse quedan desalineadas.
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    let points: Point[] = [];
    let lastX = -1;
    let lastY = -1;
    let hue = 320; // arranca en rosa neón, gira suave por el espectro

    function addPoint(x: number, y: number) {
      hue = (hue + 2.5) % 360;
      points.push({ x, y, hue, life: 1, radius: 42 + Math.random() * 20 });
      if (points.length > 120) points.shift();
    }

    // Al mover rápido el mouse, interpola puntos intermedios para que el
    // rastro sea una línea continua y no puntos sueltos con huecos.
    function onMove(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;
      if (lastX < 0) {
        addPoint(x, y);
      } else {
        const dist = Math.hypot(x - lastX, y - lastY);
        const steps = Math.min(Math.ceil(dist / 8), 12);
        for (let i = 1; i <= steps; i++) {
          const t = i / steps;
          addPoint(lastX + (x - lastX) * t, lastY + (y - lastY) * t);
        }
      }
      lastX = x;
      lastY = y;
    }

    function onTouch(e: TouchEvent) {
      const t = e.touches[0];
      if (t) onMove({ clientX: t.clientX, clientY: t.clientY } as MouseEvent);
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });

    let raf = 0;
    function tick() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of points) {
        const alpha = p.life * 0.32;
        const r = p.radius * (1.3 - p.life * 0.3);
        const grad = ctx!.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        grad.addColorStop(0, `hsla(${p.hue}, 90%, 65%, ${alpha})`);
        grad.addColorStop(1, `hsla(${p.hue}, 90%, 65%, 0)`);
        ctx!.fillStyle = grad;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx!.fill();
        p.life -= 0.035;
      }
      points = points.filter((p) => p.life > 0);

      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0"
    />
  );
}
