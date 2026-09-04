import { ArchIcon, AWSIcon, BunIcon, CppIcon, GithubIcon, DockerIcon, ExpressIcon, GitIcon, GsapIcon, NextIcon, NginxIcon, NodeIcon, OpenCvIcon, OpenGLIcon, PostgresIcon, PrismaIcon, PythonIcon, ReactIcon, ShadcnIcon, TailwindIcon, TypescriptIcon, VercelIcon, ZodIcon, FastifyIcon } from "../components/icons"
import { TechStack } from "../types"

export const LANGUAGES: TechStack[] = [
  {
    key: "py",
    title: "Python",
    url: "https://www.python.org",
    icon: <PythonIcon />
  },
  {
    key: "ts",
    title: "Typescript",
    url: "https://www.typescriptlang.org/",
    icon: <TypescriptIcon />
  },
  {
    key: "cpp",
    title: "C++",
    url: "https://isocpp.org/",
    icon: <CppIcon />
  }
]
export const FRONTEND: TechStack[] = [
  {
    key: "react",
    title: "React",
    url: "https://react.dev/",
    icon: <ReactIcon />
  },
  {
    key: "next",
    title: "Next.js",
    url: "https://nextjs.org/",
    icon: <NextIcon />
  },
  {
    key: "twcss",
    title: "Tailwindcss",
    url: "https://tailwindcss.com",
    icon: <TailwindIcon />
  },
  {
    key: "shadcnui",
    title: "shadcnui",
    url: "https://ui.shadcn.com",
    icon: <ShadcnIcon />
  },
  {
    key: "lucide",
    title: "Lucide",
    url: "https://lucide.dev",
    icon: (
      <></>
    )
  },
  {
    key: "gsap",
    title: "Gsap",
    url: "https://gsap.com",
    icon: <GsapIcon />
  },
]
export const BACKEND: TechStack[] = [
  {
    key: "bun",
    title: "Bun",
    url: "https://bun.com",
    icon: <BunIcon />
  },
  {
    key: "node",
    title: "Node.js",
    url: "https://nodejs.org/en",
    icon: <NodeIcon />
  },
  {
    key: "psql",
    title: "Postgresql",
    url: "https://www.postgresql.org",
    icon: <PostgresIcon />
  },
  {
    key: "prisma",
    title: "Prisma",
    url: "https://www.prisma.io/orm",
    icon: <PrismaIcon />
  },
  {
    key: "fsty",
    title: "Fastify",
    url: "https://fastify.dev",
    icon: <FastifyIcon />
  },
  {
    key: "zod",
    title: "Zod",
    url: "https://zod.dev",
    icon: <ZodIcon />
  },
  {
    key: "expss",
    title: "Express",
    url: "https://expressjs.com",
    icon: <ExpressIcon />
  },
  {
    key: "nginx",
    title: "Nginx",
    url: "https://nginx.org",
    icon: <NginxIcon />
  },
]
export const TOOLS: TechStack[] = [
  {
    key: "git",
    title: "Git",
    url: "https://git-scm.com",
    icon: <GitIcon />
  },
  {
    key: "cicd",
    title: "CI/CD",
    url: "https://github.com/solutions/use-case/ci-cd",
    icon: <GithubIcon />
  },
  {
    key: "docker",
    title: "Docker",
    url: "https://www.docker.com",
    icon: <DockerIcon />
  },
  {
    key: "vercel",
    title: "Vercel",
    url: "https://vercel.com",
    icon: <VercelIcon />
  },
  {
    key: "aws",
    title: "AWS",
    url: "https://aws.amazon.com",
    icon: <AWSIcon />
  },
]
export const OTHERS: TechStack[] = [
  {
    key: "opencv",
    title: "OpenCV",
    url: "https://opencv.org",
    icon: <OpenCvIcon />
  },
  {
    key: "opengl",
    title: "OpenGL",
    url: "https://www.opengl.org",
    icon: <OpenGLIcon />
  },
  {
    key: "arch",
    title: "Arch Linux",
    url: "https://archlinux.org",
    icon: <ArchIcon />
  },
  {
    key: "nvim",
    title: "Neovim",
    url: "https://neovim.io",
    icon: <></>
  },
]
