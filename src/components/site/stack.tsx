import React from "react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { BACKEND, FRONTEND, LANGUAGES, OTHERS, TOOLS } from "@/constants";

const AREAS = [
  {
    key: "Language",
    value: LANGUAGES
  },
  {
    key: "Backend",
    value: BACKEND
  },
  {
    key: "Frontend",
    value: FRONTEND
  },
  {
    key: "Tools",
    value: TOOLS
  },
  {
    key: "Others",
    value: OTHERS
  },
]
  

export default function Stack() {
  return(
    <div className="border-x border-line pt-8 p-4" id="stack">
      <h2 className="text-4xl font-sans font-medium text-balance">Stack</h2>
      <Separator className="absolute left-0"/>

      <div className="pt-2">
        <ul className="space-y-5">

          {AREAS.map((area, index) => (
            <div key={index}>
              <StackItem key={area.key} num={`0${index}`} label={area.key}>
                {area.value.map(item => (
                  <Badge key={item.key} variant="outline" className="bg-primary-foreground">{item.icon}{item.title}</Badge>
                ))}
              </StackItem>
              <Separator className="absolute left-0 sm:hidden" />
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function StackItem({num, label, children}: {num: string, label: string, children: React.ReactNode}) {
  return (
    <li className="grid grid-cols-6 font-mono max-sm:block max-sm:space-y-2">
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
