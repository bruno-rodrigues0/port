import { CodeXml } from "lucide-react";
import { Project } from "../types";
import { PythonIcon } from "../components/icons";

export const PROJECTS: Project[] = [
  {
    key: "ayuwoke",
    title: "Ayuwoke Time CInmulator",
    url: "https://github.com/bruno-rodrigues0/projeto-ip",
    labels: ["Python", "pygame", "numpy"],
    logo: <PythonIcon className="w-5"/>,
    period: {
      start: "05.2026",
      end: "06.2026",
    },

    description: (
      <>
        <p>An open source game created with pygame for the final project of &quot;programing introduction&quot; discipline</p>
        <ul className="list-disc marker:text-ring list-inside">
          <li>Pygame and game development fundamentals.</li>
          <li>Rendering optimization with pygame.</li>
          <li>Object Oriented Programing.</li>
          <li>Modularization.</li>
          <li>Git and github.</li>
        </ul>
      </>
    ),
  },

  {
    key: "apple_website",
    title: "Apple Website",
    url: "",
    labels: ["Next.js", "Typescript", "gsap", "shadcn/ui", "next-video"],
    logo: <CodeXml className="w-5"/>,
    period: {
      start: "08.2026",
      end: null,
    },

    description: (
      <>
        <p>iPhone 15 Pro presentation webpage built with Next.js and gsap.</p>
        <ul className="list-disc marker:text-ring list-inside">
          <li>Animations with gsap.</li>
          <li>3D animations with tree.js.</li>
          <li>Modern interfaces with Tailwindcss.</li>
        </ul>
      </>
    ),
  },

  {
    key: "concord",
    title: "Concord",
    url: "",
    labels: ["Next.js", "Typescript", "shadcn/ui", "Fastify", "Swagger", "zod",  "better-auth", "Postgresql", "Prisma", "nginx", "Docker", "Websocket"],
    logo: <CodeXml className="w-5"/>,
    period: {
      start: "01.2026",
      end: null,
    },

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos libero sit incidunt officia consequuntur, animi debitis dolorum ipsam voluptate nesciunt optio rem cumque totam accusamus illum voluptatibus hic quam!",
  },
]
