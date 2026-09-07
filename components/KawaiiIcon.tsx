"use client";

type Props = { name: string; className?: string };

/** Carita kawaii reutilizable: ojitos + blush + boca :3 */
function Face({ cx, cy, scale = 1 }: { cx: number; cy: number; scale?: number }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
      <circle cx="-4" cy="0" r="1.3" fill="#3b1d4e" />
      <circle cx="4" cy="0" r="1.3" fill="#3b1d4e" />
      <circle cx="-6.5" cy="2.5" r="2" fill="#93c5fd" opacity="0.7" />
      <circle cx="6.5" cy="2.5" r="2" fill="#93c5fd" opacity="0.7" />
      <path d="M-2 2.5 Q0 4.5 2 2.5" stroke="#1e40af" strokeWidth="1" fill="none" strokeLinecap="round" />
    </g>
  );
}

/**
 * Iconos kawaii dibujados a mano (SVG) para las categorías de skills.
 * Cada uno tiene su carita feliz ✨
 */
export default function KawaiiIcon({ name, className }: Props) {
  const common = {
    viewBox: "0 0 48 48",
    className,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none" as const,
  };

  switch (name) {
    // 🎨 FRONTEND — paleta de pintura
    case "frontend":
      return (
        <svg {...common} role="img" aria-label="Frontend">
          <defs>
            <linearGradient id="kiPalette" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
          <path
            d="M24 6C13 6 6 13 6 22c0 7 5 10 9 10 3 0 3-2 5-2 3 0 2 4 6 4 8 0 16-7 16-16C42 11 34 6 24 6Z"
            fill="url(#kiPalette)"
            stroke="#60a5fa"
            strokeWidth="1.5"
          />
          <circle cx="16" cy="16" r="2.4" fill="#7c3aed" />
          <circle cx="30" cy="13" r="2.4" fill="#22d3ee" />
          <circle cx="35" cy="22" r="2.4" fill="#facc15" />
          <Face cx={20} cy={28} scale={0.85} />
        </svg>
      );

    // ⚙️ BACKEND — servidor/chip
    case "backend":
      return (
        <svg {...common} role="img" aria-label="Backend">
          <defs>
            <linearGradient id="kiChip" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <rect x="12" y="12" width="24" height="24" rx="6" fill="url(#kiChip)" stroke="#22d3ee" strokeWidth="1.5" />
          {/* patitas del chip */}
          <g stroke="#22d3ee" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="12" x2="18" y2="7" />
            <line x1="24" y1="12" x2="24" y2="7" />
            <line x1="30" y1="12" x2="30" y2="7" />
            <line x1="18" y1="36" x2="18" y2="41" />
            <line x1="24" y1="36" x2="24" y2="41" />
            <line x1="30" y1="36" x2="30" y2="41" />
            <line x1="12" y1="20" x2="7" y2="20" />
            <line x1="12" y1="28" x2="7" y2="28" />
            <line x1="36" y1="20" x2="41" y2="20" />
            <line x1="36" y1="28" x2="41" y2="28" />
          </g>
          <Face cx={24} cy={24} scale={0.85} />
        </svg>
      );

    // ✨ DISEÑO — estrellita brillante
    case "design":
      return (
        <svg {...common} role="img" aria-label="Diseño UX/UI">
          <defs>
            <linearGradient id="kiStar" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <path
            d="M24 6c1.5 9 3 10.5 12 12-9 1.5-10.5 3-12 12-1.5-9-3-10.5-12-12 9-1.5 10.5-3 12-12Z"
            fill="url(#kiStar)"
            stroke="#eff6ff"
            strokeWidth="1.2"
          />
          <Face cx={24} cy={20} scale={0.7} />
        </svg>
      );

    // 🗄️ BASES DE DATOS — cilindro
    case "databases":
      return (
        <svg {...common} role="img" aria-label="Databases">
          <defs>
            <linearGradient id="kiDb" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <path d="M12 12h24v24a12 5 0 0 1-24 0Z" fill="url(#kiDb)" stroke="#eff6ff" strokeWidth="1.3" />
          <ellipse cx="24" cy="12" rx="12" ry="5" fill="#dbeafe" stroke="#60a5fa" strokeWidth="1.3" />
          <path d="M12 22a12 5 0 0 0 24 0" fill="none" stroke="#eff6ff" strokeWidth="1.2" opacity="0.7" />
          <path d="M12 30a12 5 0 0 0 24 0" fill="none" stroke="#eff6ff" strokeWidth="1.2" opacity="0.7" />
          <Face cx={24} cy={28} scale={0.8} />
        </svg>
      );

    // 🔍 QA & AUTOMATION — lupa de pruebas
    case "qa":
      return (
        <svg {...common} role="img" aria-label="QA & Automation">
          <defs>
            <linearGradient id="kiLoupe" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <circle cx="20" cy="20" r="12" fill="url(#kiLoupe)" stroke="#eff6ff" strokeWidth="1.5" />
          <line x1="29" y1="29" x2="40" y2="40" stroke="#3b82f6" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M15 20l3.5 3.5L26 15.5" stroke="#eff6ff" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <Face cx={20} cy={19} scale={0.6} />
        </svg>
      );

    // ⚙️ DEVOPS — bucle infinito
    case "devops":
      return (
        <svg {...common} role="img" aria-label="DevOps">
          <defs>
            <linearGradient id="kiOps" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <path
            d="M16 16c-5 0-8 3.6-8 8s3 8 8 8c4.5 0 6.5-3 8-5.5C33.5 31 35.5 34 40 34c5 0 8-3.6 8-8s-3-8-8-8c-4.5 0-6.5 3-8 5.5C22.5 19 20.5 16 16 16Z"
            fill="none"
            stroke="url(#kiOps)"
            strokeWidth="5"
            strokeLinecap="round"
            transform="translate(-4 0)"
          />
          <circle cx="14" cy="24" r="2" fill="#93c5fd" opacity="0.8" />
          <circle cx="30" cy="24" r="2" fill="#93c5fd" opacity="0.8" />
        </svg>
      );

    // 👩‍🏫 DOCENCIA — birrete de graduación
    case "teaching":
      return (
        <svg {...common} role="img" aria-label="Docencia">
          <defs>
            <linearGradient id="kiCap" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          {/* base del birrete */}
          <path d="M14 24h20v6a10 7 0 0 1-20 0Z" fill="#dbeafe" stroke="#60a5fa" strokeWidth="1.3" />
          {/* tapa */}
          <path d="M24 12 6 20l18 8 18-8Z" fill="url(#kiCap)" stroke="#eff6ff" strokeWidth="1.2" />
          {/* borla */}
          <line x1="42" y1="20" x2="42" y2="30" stroke="#22d3ee" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="42" cy="31" r="2" fill="#7c3aed" />
          <Face cx={24} cy={32} scale={0.8} />
        </svg>
      );

    default:
      return null;
  }
}
