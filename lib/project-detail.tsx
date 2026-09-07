"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Project } from "./data";

// Estado del case study abierto. Separado de ViewProvider a propósito: no es
// una "vista" más del recorrido principal (no entra en VIEW_ORDER ni en el
// nav radial), es un overlay que se abre/cierra sobre la vista de proyectos.
type Ctx = {
  project: Project | null;
  open: (p: Project) => void;
  close: () => void;
};

const ProjectDetailContext = createContext<Ctx | null>(null);

export function ProjectDetailProvider({ children }: { children: ReactNode }) {
  const [project, setProject] = useState<Project | null>(null);
  return (
    <ProjectDetailContext.Provider
      value={{ project, open: setProject, close: () => setProject(null) }}
    >
      {children}
    </ProjectDetailContext.Provider>
  );
}

export function useProjectDetail() {
  const ctx = useContext(ProjectDetailContext);
  if (!ctx) throw new Error("useProjectDetail debe usarse dentro de <ProjectDetailProvider>");
  return ctx;
}
