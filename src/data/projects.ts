import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "PolyPages Epub Translator",
    href: "/projects",
    tags: ["Nextjs","TypeScript","Python","Openai API","Tailwindcss","PostgreSQL","Drizzle","Vercel","JWT","Clerk","Stripe"],
    image: {
      LIGHT: "/images/projects/polypages.jpg",
      DARK: "/images/projects/polypages.jpg",
    },
  },
  {
    index: 1,
    title: "Wizard Chrome extension",
    href: "/projects",
    tags: [
      "Nextjs",
      "TypeScript",
      "LangChain",
      "RAG",
      "GraphQL",
      "PostgreSQL",
      "Mantine UI",
    ],
    image: {
      LIGHT: "/images/projects/wizard.jpg",
      DARK: "/images/projects/wizard.jpg",
    },
  },
  {
    index: 2,
    title: "SaaS AI Platform",
    href: "/projects",
    tags: ["Nextjs","TypeScript","Tailwindcss","MySQL","Prisma","Openai API","Vercel","JWT","Clerk","Stripe"],
    image: {
      LIGHT: "/images/projects/saas-ai01.jpg",
      DARK: "/images/projects/saas-ai-dark.jpg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "PolyPages Epub Translator",
    imageUrl: [
      "/images/projects/polypages.jpg",
    ],
    description:
      "PolyPages Epub Translator is an AI-powered tool that translates EPUB files efficiently using advanced language models. It features a Next.js frontend and a FastAPI (Python) backend, with support for multiple AI translation APIs.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://saa-s-book-translator.vercel.app/",
  },
  {
    name: "Wizard Chrome extension",
    imageUrl: [
      "/images/projects/wizard.jpg",
    ],
    description:
      "Wizard is an AI-driven Chrome extension designed for crypto market analysis. It leverages LangChain and RAG to generate real-time insights, with GraphQL and PostgreSQL ensuring efficient data management.",
    sourceCodeHref: "",
    liveWebsiteHref: "https://cryptomate.ai/",
  },
  {
    name: "SaaS AI Platform",
    imageUrl: [
      "/images/projects/saas-ai01.jpg",
      "/images/projects/saas-ai02.jpg",
    ],
    description:
      "A SaaS AI platform enabling the generation of images, videos, music, conversations, and code. Built with Next.js, React, and Tailwind, it integrates various AI APIs, including OpenAI for text and other specialized APIs for image and video generation. Prisma and MySQL ensure scalable data management, with Stripe for payments and dark mode functionality.",
    sourceCodeHref: "https://github.com/JamieL527/saas-ai",
    liveWebsiteHref: "https://saas-ai-beta-seven.vercel.app/",
  },
  {
    name: "NAAIA Website",
    imageUrl: [
      "/images/projects/naaia-web.jpg",
    ],
    description:
      "The North America Artificial Intelligence (AI) Association website, built with Next.js, JavaScript, and TailwindCSS, integrates PostgreSQL and Prisma for secure, scalable data management. The site enhances user engagement and supports AI-focused content and community initiatives.",
    sourceCodeHref: "https://github.com/JamieL527/naaia",
    liveWebsiteHref: "https://na-aia.org/",
  },
  {
    name: "Real Estate website",
    imageUrl: [
      "/images/projects/real-estate01.jpg",
      "/images/projects/real-estate02.jpg",
      "/images/projects/real-estate03.jpg",
      "/images/projects/real-estate04.jpg",
      "/images/projects/real-estate05.jpg",
    ],
    description:
      "A real estate agent website built with Next.js and TailwindCSS, offering a mobile-responsive and user-friendly interface for property browsing. Features include dark mode, contact forms for inquiries, and easy navigation for a seamless user experience.",
    sourceCodeHref: "https://github.com/JamieL527/real-estate",
    liveWebsiteHref: "https://real-estate-lyart-zeta.vercel.app/",
  },
  {
    name: "Long JSON Relational Mapping in JavaScript",
    imageUrl: [
      "/images/projects/longjrm.jpg",
    ],
    description:
      "A dynamic and high efficiency library designed to revolutionize the way databases are populated. Recognizing that the majority of databases don't naturally support object-oriented programming, JRM steps in as a game-changing solution, bridging the gap with finesse and efficiency.",
    sourceCodeHref: "https://github.com/JamieL527/longjrm-js/tree/jamie",
    liveWebsiteHref: "",
  },
];
