"use client";

import { useView } from "@/lib/view";

/**
 * Marca flotante — solo en móvil, donde el navbar está oculto.
 * Wordmark de texto ("emy.dev") en vez del logo con imagen: más liviano y
 * más fácil de mantener legible sobre el contenido que scrollea detrás.
 * Lleva a inicio al tocarlo.
 */
export default function MobileBrand() {
  const { goTo } = useView();

  return (
    <button
      onClick={() => goTo("inicio")}
      aria-label="Inicio"
      className="group fixed left-4 top-4 z-50 rounded-full bg-[#0a0612]/80 px-4 py-2 backdrop-blur-md transition-transform hover:scale-105 md:hidden"
    >
      <span className="font-display text-lg font-extrabold tracking-tight">
        <span className="text-white">emy</span>
        <span className="text-gradient glow-text">.dev</span>
      </span>
    </button>
  );
}
