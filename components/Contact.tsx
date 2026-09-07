"use client";

import { profile } from "@/lib/data";
import { useContent } from "@/lib/i18n";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import PixelDiamond from "./PixelDiamond";
import { iconMap, WhatsAppIcon, MailIcon } from "./Icons";

export default function Contact() {
  const { contact, ui } = useContent();
  const waLink = `${profile.whatsapp.link}?text=${encodeURIComponent(contact.prefill)}`;

  const directs = [
    { label: "WhatsApp", value: profile.whatsapp.display, href: waLink, Icon: WhatsAppIcon, color: "#25D366" },
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon, color: "#a855f7" },
  ];
  const socials = profile.socials.filter((s) =>
    ["github", "linkedin", "discord"].includes(s.icon)
  );

  return (
    <section id="contacto" className="relative flex min-h-full justify-center px-6 pb-16 pt-28 [align-items:safe_center]">
      <div className="mx-auto w-full max-w-5xl">
        <SectionHeading kicker={contact.kicker} title={contact.title} subtitle={contact.text} />

        {/* min-w-0 en los hijos: sin esto, un grid item no se achica por
            debajo del ancho de su contenido (default min-width: auto) — en
            mobile la card del formulario se salía del viewport por la
            derecha en vez de apilarse a ancho completo. */}
        <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
          {/* PANEL IZQUIERDO: tarjeta de conexión */}
          <Reveal className="min-w-0">
            <div className="gradient-border relative flex h-full flex-col overflow-hidden rounded-3xl glass-strong p-6">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-neon-pink/30 blur-3xl" />

              <div className="relative flex items-center gap-3">
                <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/5 shadow-glow">
                  <PixelDiamond className="h-8 w-8" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-ink bg-green-400" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold leading-tight text-white">{profile.name}</p>
                  <p className="flex items-center gap-1.5 text-xs text-green-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>
                    {ui.available}
                  </p>
                </div>
              </div>

              {/* Métodos directos */}
              <div className="relative mt-5 space-y-2.5">
                {directs.map((d) => (
                  <a
                    key={d.label}
                    href={d.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 transition-all hover:border-white/25 hover:bg-white/[0.06]"
                  >
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-xl"
                      style={{ backgroundColor: `${d.color}22`, color: d.color }}
                    >
                      <d.Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] uppercase tracking-wide text-white/65">{d.label}</p>
                      <p className="truncate text-sm font-medium text-white">{d.value}</p>
                    </div>
                    <span className="ml-auto text-white/25 transition-all group-hover:translate-x-1 group-hover:text-neon-pink">
                      →
                    </span>
                  </a>
                ))}
              </div>

              {/* Redes */}
              <div className="relative mt-auto flex gap-2 pt-5">
                {socials.map((s) => {
                  const Icon = iconMap[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-white/60 transition-all hover:scale-110 hover:text-neon-pink hover:shadow-glow"
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* PANEL DERECHO: consola de mensaje */}
          <Reveal delay={0.1} className="min-w-0">
            <div className="gradient-border relative h-full overflow-hidden rounded-3xl glass-strong">
              {/* Barra de título tipo ventana */}
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 font-pixel text-[9px] text-white/65">message.tsx</span>
                <span className="ml-auto font-pixel text-[8px] text-neon-cyan">✦ send</span>
              </div>
              <div className="p-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
