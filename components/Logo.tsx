// Logo real de Emily (el mismo de su portafolio anterior): wordmark + tagline.
// Es una imagen ancha (450x200) — úsala donde haya espacio horizontal
// (navbar, marca móvil), no en badges cuadrados pequeños.
export default function Logo({ className = "" }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/logo.png" alt="Emily Sepúlveda" className={className} />;
}
