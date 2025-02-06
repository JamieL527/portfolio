import {
  SiExpress,
  SiPrisma,
  SiNextdotjs,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import SqlSvg from "@/public/icons/sql.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import RecoilSvg from "@/public/icons/recoil.svg";
import MuiSvg from "@/public/icons/mui.svg";


// Backend and Database
import NodejsSvg from "@/public/icons/nodejs.svg";
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import MysqlSvg from "@/public/icons/mysql.svg";

// Generative AI
import OpenaiSvg from "@/public/icons/openai.svg";
import LangchainSvg from "@/public/icons/langchain.svg";
import MantineSvg from "@/public/icons/mantine.svg";

// Authentication & Payment:
import JWTSvg from "@/public/icons/jwt.svg";
import OAuthSvg from "@/public/icons/oauth.svg";
import ClerkSvg from "@/public/icons/clerk.svg";
import StripeSvg from "@/public/icons/stripe.svg";
// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Sql",
        icon: SqlSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Redux",
        icon: ReduxSvg,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "Recoil",
        icon: RecoilSvg,
      },
      {
        name: "MUI",
        icon: MuiSvg,
      },
    ],

  },
  {
    sectionName: "Backend and Databases",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Express",
        icon: SiExpress,
      },
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
      {
        name: "Mysql",
        icon: MysqlSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
    ],
  },
  {
    sectionName: "Generative AI",
    skills: [
      {
        name: "OpenAI API",
        icon: OpenaiSvg,
      },
      {
        name: "LangChain",
        icon: LangchainSvg,
      },
      {
        name: "prompt engineering",
        icon: MantineSvg,
      },
      {
        name: "RAG",
        icon: MantineSvg,
      },
    ],
  },
  {
    sectionName: "Authentication and Payment",
    skills: [
      {
        name: "JWT",
        icon: JWTSvg,
      },
      {
        name: "NextAuth",
        icon:  MantineSvg,
      },
      {
        name: "OAuth",
        icon: OAuthSvg,
      },
      {
        name: "Clerk",
        icon: ClerkSvg,
      },
      {
        name: "Stripe",
        icon: StripeSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
