import { Education } from "@/types";
import { Badge } from "../components/ui/badge";
import { Infinity } from "lucide-react";

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

