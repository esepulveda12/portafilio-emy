"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLock } from "react-icons/fa6";
import { useContent } from "@/lib/i18n";
import { useProjectDetail } from "@/lib/project-detail";
import { playSound } from "@/lib/sound";
import { CloseIcon, ExternalIcon, CodeIcon } from "./Icons";
import ProjectIcon from "./ProjectIcon";

// Overlay de case study: se abre encima de la vista de Proyectos sin ser una
// "vista" más del recorrido (no toca VIEW_ORDER ni el nav radial). Vive fuera
// del contenedor animado de ViewStage para no heredar su transform (rompería
// el `position: fixed` de este overlay).
export default function ProjectDetail() {
  const { projects } = useContent();
  const { project, close } = useProjectDetail();

  // Esc cierra, igual que el menú radial
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playSound("close");
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [project, close]);

  // Bloquea el scroll/swipe de fondo mientras el overlay está abierto
  useEffect(() => {
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playSound("close");
            close();
          }}
          className="fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-4 backdrop-blur-md sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            className="gradient-border relative flex max-h-[85vh] w-full max-w-xl flex-col overflow-hidden rounded-3xl glass-strong"
          >
            <button
              type="button"
              onClick={() => {
                playSound("close");
                close();
              }}
              aria-label={projects.close}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/5 text-white/70 transition hover:bg-white/15 hover:text-white"
            >
              <CloseIcon className="h-4 w-4" />
            </button>

            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/5 shadow-glow">
                  <ProjectIcon name={project.icon} color={project.iconColor} className="text-2xl" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    {project.title}
                  </h3>
                  {project.enterprise && (
                    <span className="mt-1 flex w-fit items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] text-white/60">
                      <FaLock className="h-2.5 w-2.5" />
                      {projects.enterprise}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <dl className="space-y-4">
                <div>
                  <dt className="font-pixel text-[9px] uppercase tracking-widest text-neon-cyan">
                    {projects.problem}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-white/75">
                    {project.caseStudy.problem}
                  </dd>
                </div>
                <div>
                  <dt className="font-pixel text-[9px] uppercase tracking-widest text-neon-cyan">
                    {projects.approach}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-white/75">
                    {project.caseStudy.approach}
                  </dd>
                </div>
                <div>
                  <dt className="font-pixel text-[9px] uppercase tracking-widest text-neon-cyan">
                    {projects.result}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-white/75">
                    {project.caseStudy.result}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-pink to-neon-purple px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]"
                  >
                    <ExternalIcon className="h-4 w-4" />
                    {projects.demo}
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    <CodeIcon className="h-4 w-4" />
                    {projects.code}
                  </a>
                )}
                {!project.link && !project.repo && (
                  <p className="text-xs text-white/50">{projects.noPublicDemo}</p>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
