"use client";

import { useId } from "react";

// Filas de un diamante en pixel-art (9x9), de más angosta a más ancha y de vuelta.
const ROWS = [1, 3, 5, 7, 9, 7, 5, 3, 1];
const SIZE = 9;

type Props = { className?: string };

/** Diamante retro-pixel — reemplaza al gatito como marca decorativa del sitio. */
export default function PixelDiamond({ className }: Props) {
  const uid = useId().replace(/:/g, "");
  const gradId = `pixelDiamond-${uid}`;

  const pixels: { x: number; y: number }[] = [];
  ROWS.forEach((count, row) => {
    const start = (SIZE - count) / 2;
    for (let i = 0; i < count; i++) {
      pixels.push({ x: start + i, y: row });
    }
  });

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      {pixels.map((p, i) => (
        <rect
          key={i}
          x={p.x}
          y={p.y}
          width={1}
          height={1}
          fill={`url(#${gradId})`}
          opacity={0.55 + 0.45 * (1 - Math.abs(p.y - 4) / 4)}
        >
          <animate
            attributeName="opacity"
            values={`${0.5 + 0.4 * (1 - Math.abs(p.y - 4) / 4)};1;${0.5 + 0.4 * (1 - Math.abs(p.y - 4) / 4)}`}
            dur="1.8s"
            begin={`${i * 0.02}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
    </svg>
  );
}
