import { CodeXml, Infinity } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Project } from "../types";
import { PythonIcon } from "../components/icons";

export const PROJECTS: Project[] = [
  {
    key: "ayuwoke",
    title: "Ayuwoke Time CInmulator",
    meta: <p className="flex items-center gap-1"><span>05.2026 - 06.2026</span></p>,
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
    url: "https://github.com/bruno-rodrigues0/projeto-ip",
    labels: (
      <>
        <Badge variant="outline" className="bg-primary-foreground">Python</Badge>
        <Badge variant="outline" className="bg-primary-foreground">pygame</Badge>
        <Badge variant="outline" className="bg-primary-foreground">numpy</Badge>
      </>
    ),
    logo: <PythonIcon />
  },
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
