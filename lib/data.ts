// ============================================================
//  ✦ EDITA TU INFORMACIÓN AQUÍ · EDIT YOUR INFO HERE ✦
//  Contenido bilingüe (EN/ES). Lo neutral (email, redes, links,
//  niveles, emojis) va una sola vez; lo textual va en ambos idiomas.
// ============================================================

import type { Lang } from "./i18n";

// ---------- Datos neutrales (no cambian con el idioma) ----------
export const profile = {
  name: "Emily Sepúlveda",
  firstName: "Emily",
  alias: "@esepulveda12",
  email: "emilysepulveda30personal@gmail.com",
  whatsapp: {
    display: "+57 304 120 7710",
    link: "https://wa.me/573041207710",
  },
  available: true,
  socials: [
    { label: "WhatsApp", href: "https://wa.me/573041207710", icon: "whatsapp" },
    { label: "GitHub", href: "https://github.com/esepulveda12", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/emilysepulvedaing/", icon: "linkedin" },
    { label: "Email", href: "mailto:emilysepulveda30personal@gmail.com", icon: "mail" },
  ],
};

// ---------- Testimonios (prueba social) ----------
// ⚠️ REEMPLAZA estos placeholders con testimonios REALES — de gente que lideraste,
// mentoreaste o con quien trabajaste. No inventes: un reclutador los verifica en
// LinkedIn, y un testimonio falso destruye la confianza. `avatar` y `linkedin` son
// opcionales (sin avatar se muestra la inicial; el link de LinkedIn da credibilidad).
export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatar?: string; // /testimonials/x.webp (opcional)
  linkedin?: string;
};

export const testimonialsList: Testimonial[] = [
  // Mientras esté vacío, la sección de Testimonios queda OCULTA en todo el sitio
  // (no aparece en la navegación). En cuanto agregues una entrada real, reaparece
  // sola. Forma de cada testimonio:
  // {
  //   name: "Nombre Apellido",
  //   role: "Rol · relación contigo",
  //   quote: "La frase, 1-3 líneas. Específica > genérica.",
  //   linkedin: "https://www.linkedin.com/in/...", // opcional, da credibilidad
  //   avatar: "/testimonials/persona.webp",        // opcional (si no, muestra la inicial)
  // },
];

// Base neutral de proyectos (tags, emoji, gradiente, links) — los 5 proyectos
// reales publicados en el portafolio en Vercel (mainsep, kawaiitube, retro
// pokédex, bit's cake, neo chat). El título y la descripción se traducen abajo
// en cada idioma. link = demo en vivo. repo = código en GitHub (esepulveda12).
// image = preview del proyecto en public/projects/. Si el archivo no existe,
// la card cae con gracia a su diseño de gradiente (ver ProjectCard).
const projectsBase = [
  {
    tags: ["React", "Chatbot", "Landing Page"],
    icon: "building",
    iconColor: "#a855f7",
    gradient: "from-neon-pink/40 to-neon-purple/30",
    image: "/projects/mainsep.png",
    link: "https://mainsep.vercel.app",
    repo: "https://github.com/esepulveda12/mainsep",
    featured: true,
  },
  {
    tags: ["React", "UI/UX", "Reproductor de audio"],
    icon: "note",
    iconColor: "#c084fc",
    gradient: "from-neon-purple/40 to-neon-cyan/30",
    image: "/projects/kawaiitube.png",
    link: "https://demoreproductormusica.vercel.app",
    repo: "https://github.com/esepulveda12/Demoreproductormusica",
  },
  {
    tags: ["React", "API pública", "Filtros"],
    icon: "chain",
    iconColor: "#22d3ee",
    gradient: "from-neon-cyan/40 to-neon-pink/30",
    image: "/projects/retro-pokedex.png",
    link: "https://retro-pokedex-omega.vercel.app",
    repo: "https://github.com/esepulveda12/RetroPokedex",
  },
  {
    tags: ["React", "E-commerce", "Diseño Web"],
    icon: "briefcase",
    iconColor: "#93c5fd",
    gradient: "from-neon-pink/40 to-neon-violet/30",
    image: "/projects/bits-cake.png",
    link: "https://pasteleria-brown.vercel.app",
    repo: "https://github.com/esepulveda12/Pasteleria",
  },
  {
    tags: ["React", "IA conversacional", "Tiempo real"],
    icon: "server",
    iconColor: "#e0aaff",
    gradient: "from-neon-violet/40 to-neon-cyan/30",
    image: "/projects/neochat.png",
    link: "https://neochat-beta.vercel.app",
    repo: "https://github.com/esepulveda12/Neochat",
  },
];

// ---------- Tipos ----------
// Nivel categórico en vez de porcentaje: o lo dominas (core), es sólido, o lo conoces.
export type SkillLevel = "core" | "solid" | "familiar";
export type Skill = { name: string; level: SkillLevel; emoji: string };
export type SkillGroup = { key: string; title: string; skills: Skill[] };
export type ProjectCaseStudy = {
  problem: string;
  approach: string;
  result: string;
};
export type Project = {
  title: string;
  description: string;
  caseStudy: ProjectCaseStudy;
  tags: string[];
  icon: string;
  iconColor: string;
  gradient: string;
  image?: string;
  link?: string;
  repo?: string;
  enterprise?: boolean;
  featured?: boolean;
};

// ---------- Diccionarios bilingües ----------
const dictionaries = {
  en: {
    nav: [
      { label: "Home", href: "#inicio" },
      { label: "About", href: "#sobre-mi" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#proyectos" },
      { label: "Testimonials", href: "#testimonios" },
      { label: "Contact", href: "#contacto" },
    ],
    testimonials: {
      kicker: "kind words",
      title: "What people say",
      subtitle: "From teammates and clients I've worked with.",
    },
    ui: {
      cta: "Let's talk",
      available: "Available",
      greeting: (name: string) => `Hi, I'm ${name}`,
      heroTitle: ["Full Stack", "Developer", "QA Automation · UX/UI"],
      tagline:
        "I combine frontend, backend and QA automation to build reliable digital products end to end — from clean code to a design people enjoy using.",
      viewProjects: "View projects",
      contactMe: "Contact me",
      downloadCV: "Download CV",
      location: "Bogotá, Colombia · Remote",
    },
    about: {
      kicker: "about me",
      title: "About me",
      paragraphs: [
        "I'm a Full Stack Software Developer with a background in UX/UI design — I care about the exact point where clean code meets an interface that actually works well for people.",
        "I build with React, Node.js, Python, C#/.NET and MongoDB, and I automate testing with Selenium and Playwright to keep what I ship reliable — I also design and prototype in Figma. I'm currently focused on QA Automation and exploring Generative AI to build test-automation agents.",
        "Before moving into full-time development, I worked as a freelance web developer, which taught me to manage projects end to end and adapt quickly to different clients and stacks.",
        "I'm always learning: from JavaScript and web development courses to a diploma in enterprise web development and hands-on test-automation training.",
      ],
      stats: [
        { value: "+1", label: "Year in Full Stack & QA" },
        { value: "5", label: "Projects deployed" },
        { value: "4", label: "Certifications completed" },
        { value: "2", label: "Languages spoken" },
      ],
      fact: {
        title: "Fact sheet",
        availability: "Available for work",
        rows: [
          { k: "Role", v: "Full Stack Developer Jr · QA Automation" },
          { k: "Location", v: "Bogotá, Colombia · Remote" },
          { k: "Experience", v: "1+ year professional" },
          { k: "Languages", v: "Spanish (native), English (intermediate)" },
          { k: "Focus", v: "React · Node.js · Python · .NET · Selenium/Playwright" },
          { k: "Email", v: "emilysepulveda30personal@gmail.com" },
        ],
      },
    },
    skills: {
      kicker: "my stack",
      title: "Skills & Tools",
      subtitle: "Grouped by domain, no made-up percentages — what I work with day to day first.",
      levels: { core: "Core", solid: "Solid", familiar: "Familiar" },
      groups: [
        {
          key: "frontend",
          title: "Frontend",
          skills: [
            { name: "React", level: "core", emoji: "⚛️" },
            { name: "JavaScript", level: "core", emoji: "🟨" },
            { name: "HTML / CSS", level: "core", emoji: "🧱" },
            { name: "Flutter", level: "solid", emoji: "📱" },
          ],
        },
        {
          key: "backend",
          title: "Backend",
          skills: [
            { name: "Node.js", level: "core", emoji: "🟢" },
            { name: "Python", level: "core", emoji: "🐍" },
            { name: "C# / .NET", level: "solid", emoji: "💠" },
            { name: "PHP", level: "solid", emoji: "🐘" },
          ],
        },
        {
          key: "databases",
          title: "Databases",
          skills: [
            { name: "MongoDB", level: "core", emoji: "🍃" },
            { name: "MySQL", level: "solid", emoji: "🗃️" },
          ],
        },
        {
          key: "qa",
          title: "QA & Automation",
          skills: [
            { name: "Playwright", level: "core", emoji: "🎭" },
            { name: "Selenium", level: "core", emoji: "🧪" },
            { name: "Postman", level: "solid", emoji: "📮" },
          ],
        },
        {
          key: "devops",
          title: "DevOps & Tools",
          skills: [
            { name: "Git", level: "core", emoji: "🌿" },
            { name: "GitHub Actions / CI-CD", level: "solid", emoji: "🔁" },
            { name: "Docker", level: "solid", emoji: "🐳" },
            { name: "Azure", level: "solid", emoji: "☁️" },
          ],
        },
        {
          key: "design",
          title: "UX/UI Design",
          skills: [
            { name: "Figma", level: "core", emoji: "🎯" },
            { name: "Illustrator", level: "solid", emoji: "🖊️" },
            { name: "Photoshop", level: "solid", emoji: "🖼️" },
          ],
        },
      ] as SkillGroup[],
    },
    projects: {
      kicker: "my work",
      title: "Featured projects",
      subtitle: "Personal builds deployed and live — the idea, my role and what I shipped.",
      enterprise: "Enterprise · private",
      demo: "Live demo",
      code: "Code",
      openProject: "Open project",
      caseStudy: "View case study",
      problem: "Problem",
      approach: "Approach",
      result: "Result",
      close: "Close",
      noPublicDemo: "Private project — no public demo.",
      items: [
        {
          title: "Mainsep",
          description:
            "A multi-page site for a fictional tech company, with a live chat widget and a virtual assistant (\"Sara\"). Covers a full service catalog — e-commerce, software development, blockchain consulting, UX/UI design, mobile apps and digital marketing — plus FAQ and contact sections.",
          caseStudy: {
            problem:
              "A fictional tech company needed a credible multi-page site that could showcase a full service catalog and let visitors get quick answers without waiting on a human.",
            approach:
              "Built a multi-page React site with a virtual assistant (\"Sara\") and a live chat widget, structuring content around six service lines plus FAQ and contact.",
            result:
              "A cohesive, navigable site that demonstrates end-to-end frontend architecture and conversational UX in one build.",
          },
        },
        {
          title: "KawaiiTube",
          description:
            "A retro music player with a kawaii aesthetic: song search, popular categories (Rock, Pop, Piano, Classical, K-Pop, Electronic) and Home / Favorites / Library navigation.",
          caseStudy: {
            problem:
              "Needed a music-player demo that felt distinctive rather than a generic streaming-app clone, with real search and category browsing.",
            approach:
              "Designed a retro/kawaii visual language on top of a working player: song search, popular categories, and Home / Favorites / Library navigation.",
            result:
              "A playful, cohesive UI that shows I can pair a distinct visual identity with functional product navigation.",
          },
        },
        {
          title: "Retro Pokédex",
          description:
            "A collectible album of the original 151 Pokémon, with type filters (fire, water, grass and more), a \"caught / remaining\" progress tracker, and pagination across the full set.",
          caseStudy: {
            problem:
              "Wanted to practice consuming a public API well beyond a simple list — filtering, state and pagination across a real dataset of 151 entries.",
            approach:
              "Built a collectible-album UI with type filters, a caught/remaining progress tracker, and pagination across the full set.",
            result:
              "A responsive, filterable catalog that proves I can turn a public API into a genuinely usable browsing experience.",
          },
        },
        {
          title: "Bit's Cake",
          description:
            "An e-commerce landing page for a bakery: a cake catalog with prices and a buy button, a \"why choose us\" section, an about section, and direct contact info.",
          caseStudy: {
            problem:
              "A small bakery needed an online presence that could show its catalog and let customers reach out directly, without a full e-commerce backend.",
            approach:
              "Built an e-commerce-style landing page: cake catalog with prices and a buy button, a \"why choose us\" section, an about section and direct contact info.",
            result:
              "A conversion-focused landing page that balances visual appeal with a clear path to purchase or contact.",
          },
        },
        {
          title: "Neo Chat AI",
          description:
            "A chat app with an integrated conversational AI model, live connection status and a clean messaging interface.",
          caseStudy: {
            problem:
              "Wanted to explore real-time UX patterns around a conversational AI: connection state, message flow, and a clean interface that doesn't feel like a raw API demo.",
            approach:
              "Built a chat app with an integrated conversational AI model, a live connection-status indicator, and a clean, focused messaging interface.",
            result:
              "A working real-time chat surface that shows I can wire AI responses into a product-quality interface, not just a console log.",
          },
        },
      ],
    },
    contact: {
      kicker: "say hi",
      title: "Let's work together",
      text: "Tell me about your idea or project — or just say hi. I reply quickly and with genuine enthusiasm.",
      form: {
        name: "Your name",
        email: "Your email",
        message: "Your message",
        send: "Send message",
        sending: "Sending...",
        thanks: "Thank you!",
        success: "Message sent! I'll get back to you soon.",
        error: "Something went wrong. Try WhatsApp or email below.",
        orEmail: "or write me directly:",
      },
      quick: "Quick contact",
      orForm: "or send me a message",
      prefill: "Hi Emily, I saw your portfolio and I'd love to talk.",
    },
    footer: {
      made: "Built with Next.js & Tailwind",
      coffee: "",
      tagline: "stay kawaii · keep coding",
    },
    music: {
      play: "Play lofi music",
      pause: "Pause music",
      hint: "Add your track at public/music/lofi.mp3",
    },
    cv: {
      labels: {
        profile: "Profile",
        experience: "Experience",
        education: "Education",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        languages: "Languages",
        certifications: "Certifications",
      },
      languages: ["Spanish (native)", "English (intermediate)"],
      experience: [
        {
          role: "Full Stack Developer Jr",
          company: "Identidad Tech",
          period: "Dec 2025 — Present",
          bullets: [
            "Develop frontend and backend features for software applications.",
            "Automate functional tests to ensure code quality.",
            "Identify, diagnose and fix bugs in production and development.",
            "Collaborate with the development team on continuous process improvement.",
          ],
        },
        {
          role: "Software Development & Analysis Intern",
          company: "Identidad Tech",
          period: "Mar 2025 — Dec 2025",
          bullets: [
            "Executed quality control (QA) tests on software applications.",
            "Automated tests using tools such as Selenium and Playwright.",
            "Detected and fixed bugs found during test cycles.",
            "Documented test cases and results reports.",
          ],
        },
        {
          role: "Freelance Web Developer",
          company: "Fiverr",
          period: "Jan 2022 — Aug 2025",
          bullets: [
            "Delivered freelance web development projects for international clients.",
            "Managed projects end to end: scope, client communication and delivery.",
            "Adapted quickly to different stacks and requirements per project.",
          ],
        },
      ],
      education: [
        { title: "Software Engineering", place: "Corporación Universitaria Iberoamericana", period: "Graduated, Apr 2025" },
        { title: "Technologist in Software Analysis and Development", place: "SENA", period: "2022" },
      ],
      certifications: [
        "JavaScript Course — Platzi",
        "Diploma in Enterprise Web Development — BIT",
        "Test Automation with Playwright",
        "Generative AI: AI Tools & Building Test-Automation Agents",
      ],
    },
    marquee: [
      "React", "JavaScript", "Node.js", "Python", "C#", ".NET",
      "MongoDB", "MySQL", "Selenium", "Playwright", "Postman",
      "Docker", "Azure", "GitHub Actions", "Figma", "Flutter",
    ],
    langButton: "ES",
  },

  es: {
    nav: [
      { label: "Inicio", href: "#inicio" },
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Skills", href: "#skills" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Contacto", href: "#contacto" },
    ],
    testimonials: {
      kicker: "buenas palabras",
      title: "Lo que dicen",
      subtitle: "De compañeros y clientes con quienes he trabajado.",
    },
    ui: {
      cta: "Hablemos",
      available: "Disponible",
      greeting: (name: string) => `Hola, soy ${name}`,
      heroTitle: ["Full Stack", "Developer", "QA Automation · UX/UI"],
      tagline:
        "Combino frontend, backend y automatización de QA para construir productos digitales confiables de punta a punta — del código limpio a un diseño que la gente disfruta usar.",
      viewProjects: "Ver proyectos",
      contactMe: "Contáctame",
      downloadCV: "Descargar CV",
      location: "Bogotá, Colombia · Remoto",
    },
    about: {
      kicker: "conóceme",
      title: "Sobre mí",
      paragraphs: [
        "Soy Desarrolladora de Software Full Stack con formación en diseño UX/UI — me importa el punto exacto donde el código limpio se encuentra con una interfaz que de verdad funciona bien para las personas.",
        "Construyo con React, Node.js, Python, C#/.NET y MongoDB, y automatizo pruebas con Selenium y Playwright para que lo que entrego sea confiable — también diseño y prototipo en Figma. Ahora mismo estoy enfocada en QA Automation y explorando Inteligencia Artificial Generativa para crear agentes de automatización de pruebas.",
        "Antes de dedicarme al desarrollo de tiempo completo, trabajé como desarrolladora web freelance, lo que me enseñó a gestionar proyectos de punta a punta y a adaptarme rápido a distintos clientes y stacks.",
        "Siempre estoy aprendiendo: desde cursos de JavaScript y desarrollo web hasta un diplomado en desarrollo web empresarial y formación práctica en automatización de pruebas.",
      ],
      stats: [
        { value: "+1", label: "Año en Full Stack & QA" },
        { value: "5", label: "Proyectos desplegados" },
        { value: "4", label: "Certificaciones completadas" },
        { value: "2", label: "Idiomas" },
      ],
      fact: {
        title: "Ficha técnica",
        availability: "Disponible para trabajar",
        rows: [
          { k: "Rol", v: "Full Stack Developer Jr · QA Automation" },
          { k: "Ubicación", v: "Bogotá, Colombia · Remoto" },
          { k: "Experiencia", v: "+1 año profesional" },
          { k: "Idiomas", v: "Español (nativo), Inglés (intermedio)" },
          { k: "Enfoque", v: "React · Node.js · Python · .NET · Selenium/Playwright" },
          { k: "Email", v: "emilysepulveda30personal@gmail.com" },
        ],
      },
    },
    skills: {
      kicker: "mi stack",
      title: "Skills & Herramientas",
      subtitle: "Agrupado por dominio, sin porcentajes inventados — primero lo que uso a diario.",
      levels: { core: "Dominio", solid: "Sólido", familiar: "Familiar" },
      groups: [
        {
          key: "frontend",
          title: "Frontend",
          skills: [
            { name: "React", level: "core", emoji: "⚛️" },
            { name: "JavaScript", level: "core", emoji: "🟨" },
            { name: "HTML / CSS", level: "core", emoji: "🧱" },
            { name: "Flutter", level: "solid", emoji: "📱" },
          ],
        },
        {
          key: "backend",
          title: "Backend",
          skills: [
            { name: "Node.js", level: "core", emoji: "🟢" },
            { name: "Python", level: "core", emoji: "🐍" },
            { name: "C# / .NET", level: "solid", emoji: "💠" },
            { name: "PHP", level: "solid", emoji: "🐘" },
          ],
        },
        {
          key: "databases",
          title: "Bases de datos",
          skills: [
            { name: "MongoDB", level: "core", emoji: "🍃" },
            { name: "MySQL", level: "solid", emoji: "🗃️" },
          ],
        },
        {
          key: "qa",
          title: "QA & Automatización",
          skills: [
            { name: "Playwright", level: "core", emoji: "🎭" },
            { name: "Selenium", level: "core", emoji: "🧪" },
            { name: "Postman", level: "solid", emoji: "📮" },
          ],
        },
        {
          key: "devops",
          title: "DevOps & Tools",
          skills: [
            { name: "Git", level: "core", emoji: "🌿" },
            { name: "GitHub Actions / CI-CD", level: "solid", emoji: "🔁" },
            { name: "Docker", level: "solid", emoji: "🐳" },
            { name: "Azure", level: "solid", emoji: "☁️" },
          ],
        },
        {
          key: "design",
          title: "Diseño UX/UI",
          skills: [
            { name: "Figma", level: "core", emoji: "🎯" },
            { name: "Illustrator", level: "solid", emoji: "🖊️" },
            { name: "Photoshop", level: "solid", emoji: "🖼️" },
          ],
        },
      ] as SkillGroup[],
    },
    projects: {
      kicker: "mi trabajo",
      title: "Proyectos destacados",
      subtitle: "Builds personales desplegados y en vivo — la idea, mi rol y lo que entregué.",
      enterprise: "Empresarial · privado",
      demo: "Demo en vivo",
      code: "Código",
      openProject: "Abrir proyecto",
      caseStudy: "Ver caso de estudio",
      problem: "Problema",
      approach: "Enfoque",
      result: "Resultado",
      close: "Cerrar",
      noPublicDemo: "Proyecto privado — sin demo pública.",
      items: [
        {
          title: "Mainsep",
          description:
            "Sitio multipágina para una empresa de tecnología ficticia, con widget de chat en vivo y asistente virtual (\"Sara\"). Incluye catálogo completo de servicios — e-commerce, desarrollo de software, consultoría blockchain, diseño UX/UI, apps móviles y marketing digital — además de preguntas frecuentes y contacto.",
          caseStudy: {
            problem:
              "Una empresa de tecnología ficticia necesitaba un sitio multipágina creíble que mostrara un catálogo completo de servicios y resolviera dudas rápidas sin depender de un humano.",
            approach:
              "Construí un sitio multipágina en React con un asistente virtual (\"Sara\") y widget de chat en vivo, organizando el contenido en seis líneas de servicio más FAQ y contacto.",
            result:
              "Un sitio cohesionado y navegable que demuestra arquitectura frontend de punta a punta y UX conversacional en un solo build.",
          },
        },
        {
          title: "KawaiiTube",
          description:
            "Reproductor de música retro con estética kawaii: buscador de canciones, categorías populares (Rock, Pop, Piano, Classical, K-Pop, Electronic) y navegación por Home, Favoritos y Biblioteca.",
          caseStudy: {
            problem:
              "Necesitaba un demo de reproductor de música que se sintiera distintivo y no un clon genérico de una app de streaming, con búsqueda real y categorías navegables.",
            approach:
              "Diseñé un lenguaje visual retro/kawaii sobre un reproductor funcional: búsqueda de canciones, categorías populares y navegación Home / Favoritos / Biblioteca.",
            result:
              "Una UI juguetona y coherente que muestra que puedo combinar una identidad visual distintiva con navegación de producto funcional.",
          },
        },
        {
          title: "Retro Pokédex",
          description:
            "Álbum coleccionable de los 151 Pokémon originales, con filtro por tipo (fuego, agua, planta y más), un sistema de progreso \"capturados / restantes\" y paginación sobre todo el set.",
          caseStudy: {
            problem:
              "Quería practicar el consumo de una API pública más allá de una lista simple: filtros, estado y paginación sobre un dataset real de 151 elementos.",
            approach:
              "Construí una UI de álbum coleccionable con filtro por tipo, un tracker de progreso capturados/restantes y paginación sobre todo el set.",
            result:
              "Un catálogo responsivo y filtrable que demuestra que puedo convertir una API pública en una experiencia de navegación realmente usable.",
          },
        },
        {
          title: "Bit's Cake",
          description:
            "Landing de e-commerce para una pastelería: catálogo de tortas con precio y botón de compra, sección \"por qué elegirnos\", sección \"sobre nosotros\" y contacto directo.",
          caseStudy: {
            problem:
              "Una pastelería pequeña necesitaba presencia online que mostrara su catálogo y permitiera contacto directo, sin un backend completo de e-commerce.",
            approach:
              "Construí una landing estilo e-commerce: catálogo de tortas con precio y botón de compra, sección \"por qué elegirnos\", sección \"sobre nosotros\" y contacto directo.",
            result:
              "Una landing enfocada en conversión que equilibra atractivo visual con un camino claro hacia la compra o el contacto.",
          },
        },
        {
          title: "Neo Chat AI",
          description:
            "Aplicación de chat con un modelo de IA conversacional integrado, estado de conexión en vivo y una interfaz de mensajería limpia.",
          caseStudy: {
            problem:
              "Quería explorar patrones de UX en tiempo real alrededor de una IA conversacional: estado de conexión, flujo de mensajes y una interfaz limpia que no se sintiera como un demo crudo de API.",
            approach:
              "Construí una app de chat con un modelo de IA conversacional integrado, indicador de estado de conexión en vivo y una interfaz de mensajería limpia y enfocada.",
            result:
              "Una superficie de chat en tiempo real funcional que muestra que puedo conectar respuestas de IA a una interfaz de calidad de producto, no solo a un log de consola.",
          },
        },
      ],
    },
    contact: {
      kicker: "salúdame",
      title: "Trabajemos juntas",
      text: "Cuéntame tu idea o proyecto, o solo salúdame. Respondo rápido y con muchas ganas.",
      form: {
        name: "Tu nombre",
        email: "Tu correo",
        message: "Tu mensaje",
        send: "Enviar mensaje",
        sending: "Enviando...",
        thanks: "¡Gracias!",
        success: "¡Mensaje enviado! Te respondo muy pronto.",
        error: "Algo falló. Prueba con WhatsApp o el correo de abajo.",
        orEmail: "o escríbeme directo:",
      },
      quick: "Contacto rápido",
      orForm: "o envíame un mensaje",
      prefill: "Hola Emily, vi tu portafolio y me encantaría conversar.",
    },
    footer: {
      made: "Hecho con Next.js y Tailwind",
      coffee: "",
      tagline: "stay kawaii · keep coding",
    },
    music: {
      play: "Poner música lofi",
      pause: "Pausar música",
      hint: "Pon tu pista en public/music/lofi.mp3",
    },
    cv: {
      labels: {
        profile: "Perfil",
        experience: "Experiencia",
        education: "Educación",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        languages: "Idiomas",
        certifications: "Certificaciones",
      },
      languages: ["Español (nativo)", "Inglés (intermedio)"],
      experience: [
        {
          role: "Full Stack Developer Jr",
          company: "Identidad Tech",
          period: "Dic 2025 — Actual",
          bullets: [
            "Desarrollo de funcionalidades frontend y backend para aplicaciones de software.",
            "Automatización de pruebas funcionales para garantizar la calidad del código.",
            "Identificación, diagnóstico y corrección de bugs en producción y desarrollo.",
            "Colaboración con el equipo de desarrollo en la mejora continua de procesos.",
          ],
        },
        {
          role: "Practicante de Desarrollo y Análisis de Software",
          company: "Identidad Tech",
          period: "Mar 2025 — Dic 2025",
          bullets: [
            "Ejecución de pruebas de control de calidad (QA) sobre aplicaciones de software.",
            "Automatización de pruebas utilizando herramientas como Selenium y Playwright.",
            "Detección y corrección de bugs identificados durante los ciclos de prueba.",
            "Documentación de casos de prueba y reportes de resultados.",
          ],
        },
        {
          role: "Desarrolladora Web Freelance",
          company: "Fiverr",
          period: "Ene 2022 — Ago 2025",
          bullets: [
            "Entrega de proyectos de desarrollo web freelance para clientes internacionales.",
            "Gestión de proyectos de punta a punta: alcance, comunicación con el cliente y entrega.",
            "Adaptación rápida a distintos stacks y requerimientos según cada proyecto.",
          ],
        },
      ],
      education: [
        { title: "Ingeniería de Software", place: "Corporación Universitaria Iberoamericana", period: "Graduada, Abr 2025" },
        { title: "Tecnólogo en Análisis y Desarrollo de Software", place: "SENA", period: "2022" },
      ],
      certifications: [
        "Curso de JavaScript — Platzi",
        "Diplomado en Desarrollo Web Empresarial — BIT",
        "Curso de Automatización de Pruebas con Playwright",
        "Curso de Inteligencia Artificial Generativa: Herramientas de IA y Creación de Agentes para Automatización de Pruebas",
      ],
    },
    marquee: [
      "React", "JavaScript", "Node.js", "Python", "C#", ".NET",
      "MongoDB", "MySQL", "Selenium", "Playwright", "Postman",
      "Docker", "Azure", "GitHub Actions", "Figma", "Flutter",
    ],
    langButton: "EN",
  },
};

// ---------- Selector: arma el contenido del idioma activo ----------
export function getContent(lang: Lang) {
  const d = dictionaries[lang];
  // Combina la base neutral de proyectos con el texto traducido
  const projects: Project[] = projectsBase.map((base, i) => ({
    ...base,
    title: d.projects.items[i].title,
    description: d.projects.items[i].description,
    caseStudy: d.projects.items[i].caseStudy,
  }));

  // La sección de testimonios solo aparece si hay testimonios reales cargados.
  // Vacío = oculta (no mostramos prueba social falsa).
  const nav = testimonialsList.length
    ? d.nav
    : d.nav.filter((n) => n.href !== "#testimonios");

  return {
    nav,
    ui: d.ui,
    about: d.about,
    skills: d.skills,
    projects: { ...d.projects, items: projects },
    testimonials: d.testimonials,
    contact: d.contact,
    footer: d.footer,
    music: d.music,
    cv: d.cv,
    marquee: d.marquee,
    langButton: d.langButton,
  };
}
