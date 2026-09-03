import { CodeXml, Infinity } from "lucide-react"
import { ReactNode } from "react"
import { Badge } from "../components/ui/badge"
import { ArchIcon, AWSIcon, BunIcon, CppIcon, CiCdIcon, DockerIcon, ExpressIcon, GitIcon, GsapIcon, NextIcon, NginxIcon, NodeIcon, OpenCvIcon, OpenGLIcon, PostgresIcon, PrismaIcon, PythonIcon, ReactIcon, ShadcnIcon, TailwindIcon, TypescriptIcon, VercelIcon, ZodIcon, FastifyIcon } from "../components/icons"


export type TechStack = {
  key: string,
  title: string,
  url: string,
  icon: ReactNode
}

export type Project = {
  key: string,
  title: string,
  meta: string | ReactNode,
  description: string | ReactNode,
  labels?: ReactNode,
  url: string,
  logo: string | ReactNode
}

export type Education = {
  key: string,
  school: string,
  degree?: string,
  fieldOfStudy?: string,
  period: string | ReactNode,
  description: string | ReactNode,
  labels ?: ReactNode,
  logo: string | ReactNode
}

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
    icon: <CiCdIcon />
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

export const PROJECTS: Project[] = [
  {
    key: "apple_website",
    title: "Apple Website",
    meta: <p className="flex items-center gap-1"><span>08.2026 - </span><Infinity width={18}/> </p>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos libero sit incidunt officia consequuntur, animi debitis dolorum ipsam voluptate nesciunt optio rem cumque totam accusamus illum voluptatibus hic quam!",
    url: "",
    labels: (
      <>
        <Badge variant="outline" className="bg-primary-foreground">Next.js</Badge>
        <Badge variant="outline" className="bg-primary-foreground">Typescript</Badge>
        <Badge variant="outline" className="bg-primary-foreground">Gsap</Badge>
        <Badge variant="outline" className="bg-primary-foreground">shadcnui</Badge>
        <Badge variant="outline" className="bg-primary-foreground">next-video</Badge>
      </>
    ),
    logo: <CodeXml className="w-5"/>
  },
  {
    key: "concord",
    title: "Concord",
    meta: <p className="flex items-center gap-1"><span>01.2026 - </span><Infinity width={18}/> </p>,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos libero sit incidunt officia consequuntur, animi debitis dolorum ipsam voluptate nesciunt optio rem cumque totam accusamus illum voluptatibus hic quam!",
    url: "",
    labels: (
      <>
        <Badge variant="outline" className="bg-primary-foreground">Next.js</Badge>
        <Badge variant="outline" className="bg-primary-foreground">Typescript</Badge>
        <Badge variant="outline" className="bg-primary-foreground">shadcnui</Badge>
        <Badge variant="outline" className="bg-primary-foreground">Fastify</Badge>
        <Badge variant="outline" className="bg-primary-foreground">Swagger</Badge>
        <Badge variant="outline" className="bg-primary-foreground">Zod</Badge>
        <Badge variant="outline" className="bg-primary-foreground">Better-auth</Badge>
        <Badge variant="outline" className="bg-primary-foreground">Postgres</Badge>
        <Badge variant="outline" className="bg-primary-foreground">Prisma</Badge>
        <Badge variant="outline" className="bg-primary-foreground">Nginx</Badge>
        <Badge variant="outline" className="bg-primary-foreground">Docker</Badge>
      </>
    ),
    logo: <CodeXml className="w-5"/>
  },
]


export const EDUCATION: Education[] = [
  {
    school: "CIn - UFPE",
    degree: "Bachelor's degree",
    description: (<>
      <ul className="list-disc marker:text-ring list-inside">
        <li>Learned about: </li>
        <ul className="list-disc list-inside marker:text-secondary pl-6">
          <li>Fundamentals of computing.</li>
          <li>Data structure and algoriths.</li>
          <li>Object Oriented Programing.</li>
          <li>Digital systems.</li>
          <li>Software engineering.</li>
        </ul>
      </ul>
    </>),
    key: "ufpe",
    fieldOfStudy: "Computer Science",
    logo: <></>,
    labels: (
      <>
        <Badge variant="outline">Python</Badge>
        <Badge variant="outline">C++</Badge>
        <Badge variant="outline">Verilog</Badge>
        <Badge variant="outline">Software Engineering</Badge>
      </>
    ),
    period: <p className="flex gap-1 items-center">2026 - <Infinity width={18}/></p>
  },
  {
    school: "Instituto Federal Baiano",
    degree: "High School",
    description: (<>
      <ul className="list-disc marker:text-ring list-inside">
        <li>Member of the largest drone team in the state of Bahia</li>
        <li>Two-time winner of a local programming contest.</li>
        <li>Third place in the Santa Catarina drone competition.</li>
        <li>Learned about web development</li>
        <li>Two written articles.</li>
        <li>Academic projects with: </li>
        <ul className="list-disc list-inside marker:text-secondary pl-6">
          <li>Django</li>
          <li>PHP</li>
        </ul>
        <li>Learned the basics of requirements engineering.</li>
        <li>Learned the basics of databases.</li>
      </ul>
    </>),
    key: "ifbaiano",
    logo: <></>,
    labels: (
      <>
        <Badge variant="outline">HTML</Badge>
        <Badge variant="outline">CSS</Badge>
        <Badge variant="outline">C</Badge>
        <Badge variant="outline">MySQL</Badge>
        <Badge variant="outline">Arduino</Badge>
        <Badge variant="outline">PHP</Badge>
        <Badge variant="outline">Python</Badge>
        <Badge variant="outline">Django</Badge>
      </>
    ),
    period: <p>2022 - 2025</p>
  },
]
