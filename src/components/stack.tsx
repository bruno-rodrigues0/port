import React from "react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const LANGUAGES = ["Python", "Typescript", "C++"]
const BACKEND = ["Bun", "Node.js", "Postgresql", "Prisma", "Fastify", "Swagger", "Zod", "Express", "Nginx"]
const FRONTEND = ["React", "Next.js", "Tailwindcss", "shadcnui", "Lucide"]
const TOOLS = ["Git", "CI/CD", "Docker", "Vercel", "AWS"]
const OTHERS = ["Opencv", "Opengl", "Arch Linux", "Neovim"]

export default function Stack() {
  return(
    <div className="border-x border-line pt-8 p-4">
      <div>
        <h2 className="text-3xl font-medium">Stack</h2>
      </div>
      <Separator className="absolute left-0"/>

      <div className="pt-2">
        <ul className="space-y-4">
          <StackItem num="01" label="Language">
            {LANGUAGES.map((item, i) => (<Badge variant="outline" key={i}>{item}</Badge>))}
          </StackItem>

          <StackItem num="02" label="Backend & Database">
            {BACKEND.map((item, i) => (<Badge variant="outline" key={i}>{item}</Badge>))}
          </StackItem>

          <StackItem num="03" label="Frontend">
            {FRONTEND.map((item, i) => (<Badge variant="outline" key={i}>{item}</Badge>))}
          </StackItem>

          <StackItem num="04" label="Tools and plataforms">
            {TOOLS.map((item, i) => (<Badge variant="outline" key={i}>{item}</Badge>))}
          </StackItem>

          <StackItem num="05" label="Others">
            {OTHERS.map((item, i) => (<Badge variant="outline" key={i}>{item}</Badge>))}
          </StackItem>
        </ul>
      </div>
    </div>
  )
}

export function StackItem({num, label, children}: {num: string, label: string, children: React.ReactNode}) {
  return (
    <li className="grid grid-cols-6 font-mono">
      <div className="col-span-2 text-[.9rem]">
        <span className="text-ring">{num}. </span>
        <span>{label}</span>
      </div>

      <div className="col-span-4 flex items-center flex-wrap gap-1">
        {children}
      </div>
    </li>
  )
}
