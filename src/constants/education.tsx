import { Education } from "@/types";

export const EDUCATION: Education[] = [
  {
    key: "ufpe",
    school: "CIn - UFPE",
    degree: "Bachelor's degree",
    fieldOfStudy: "Computer Science",
    labels: ["Python", "C++", "Verilog", "Software Engineering"],
    period: {
      start: "2026",
      end: null,
    },

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
  },
  {
    key: "ifbaiano",
    school: "Instituto Federal Baiano",
    degree: "High School",
    labels: ["HTML", "CSS", "C", "MySQL", "Arduino", "PHP", "Python", "Django"],
    period: {
      start: "2022",
      end: "2025",
    },

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
  },
]

