"use client";

import Logo from "./Logo";
import { useView } from "@/lib/view";

/**
 * Logo flotante — solo en móvil, donde el navbar está oculto.
 * Lleva a inicio al tocarlo.
 */
export default function MobileBrand() {
  const { goTo } = useView();

  return (
    <button
      onClick={() => goTo("inicio")}
      aria-label="Inicio"
      className="group fixed left-4 top-4 z-50 transition-transform hover:scale-105 md:hidden"
    >
      <Logo className="h-11 w-auto" />
    </button>
  );
}
