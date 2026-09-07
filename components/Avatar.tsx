"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Muestra la foto de perfil (/profile.png, fondo ya recortado) optimizada
 * con next/image. Si todavía no existe, cae elegantemente a un monograma.
 * Para cambiarla: reemplaza  public/profile.png
 */
export default function Avatar({
  className = "",
  src = "/profile.png",
  contain = false,
  position = "center",
}: {
  className?: string;
  src?: string;
  contain?: boolean;
  /** object-position en modo cover (default "center"). Súbela ("top") si el
      encuadre recorta la frente en marcos chicos/circulares. */
  position?: string;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`grid place-items-center bg-gradient-to-br from-neon-pink/30 via-neon-purple/30 to-neon-cyan/30 ${className}`}
      >
        <span className="font-display text-4xl font-extrabold text-white/80">ES</span>
      </div>
    );
  }

  // Degradado en los 4 lados (solo en modo "contain"): la foto se disuelve
  // hacia afuera en vez de cortarse en seco donde termina el encuadre original.
  const edgeMask = contain
    ? {
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, #000 10%, #000 62%, transparent 96%), linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
        WebkitMaskComposite: "source-in",
        maskImage:
          "linear-gradient(to bottom, transparent 0%, #000 10%, #000 62%, transparent 96%), linear-gradient(to right, transparent 0%, #000 14%, #000 86%, transparent 100%)",
        maskComposite: "intersect",
      }
    : undefined;

  return (
    <div className={`relative ${contain ? "" : "overflow-hidden"} ${className}`}>
      <Image
        src={src}
        alt="Emily Sepúlveda"
        fill
        sizes="(max-width: 768px) 85vw, 400px"
        className={contain ? "object-contain object-bottom" : "object-cover"}
        style={contain ? edgeMask : { objectPosition: position }}
        onError={() => setError(true)}
      />
    </div>
  );
}
