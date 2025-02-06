import Image from "next/image";

import { AnimatePresence } from "framer-motion";

import FadeUp from "@/animation/fade-up";
import FadeRight from "@/animation/fade-right";


export default function AboutHero() {
  return (
    <div className="mx-auto mt-0 flex max-w-7xl flex-col items-center gap-6 px-6 pt-20 text-center sm:px-14 md:mt-20 md:px-20 lg:mt-0 lg:flex-row lg:text-left">
     
      <div className="mx-auto items-center sm:1/2 mt-10 w-full">
        <AnimatePresence>
          <FadeUp key="title-greeting" duration={0.6}>
            <h1 className="text-6xl font-bold text-accent text-center sm:text-7xl md:text-6xl lg:text-5xl xl:text-7xl">
              Hi, I&apos;m Jiangyang Liu
            </h1>
          </FadeUp>
          <FadeUp key="description-1" duration={0.6} delay={0.2}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
            As a Full Stack Developer with a strong AI focus, I bring both front-end and back-end expertise to turn ideas into dynamic digital solutions. From crafting seamless UIs with React and Next.js to building AI-driven systems with Python and Node.js, I offer comprehensive solutions that meet modern needs. My recent work includes developing AI-powered platforms that leverage cutting-edge technologies like LangChain and OpenAI API.
            </p>
          </FadeUp>
          <FadeUp key="description-2" duration={0.6} delay={0.4}>
            <p className="mt-8 text-base font-medium text-zinc-900 dark:text-zinc-300 sm:text-lg md:text-lg">
            Explore my latest projects where I blend AI, React, Next.js, JavaScript, TypeScript, Node.js, Python, and database management to create innovative products.
            </p>
          </FadeUp>
          <FadeRight
            key="hero-location"
            duration={0.6}
            delay={0.8}
            className="mr-0 mt-8 flex items-center justify-center gap-4 lg:mr-8 lg:justify-end"
          >
            <div className="relative flex w-12 gap-4 overflow-hidden rounded-md">
              <Image
                className="-z-10 h-full w-full bg-cover bg-no-repeat"
                alt="Canadian flag"
                src="https://flagcdn.com/ca.svg"
                width={15}
                height={15}
              />
            </div>
            <span className="text-lg font-medium text-foreground">
              Toronto, ON
            </span>
          </FadeRight>
        </AnimatePresence>
      </div>
    </div>
  );
}
