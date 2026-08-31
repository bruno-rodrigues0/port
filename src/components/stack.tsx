import React from "react";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { BACKEND, FRONTEND, LANGUAGES, OTHERS, TOOLS } from "../constants";

export default function Stack() {
  return(
    <div className="border-x border-line pt-8 p-4" id="stack">
      <h2 className="text-4xl font-medium text-balance">Stack</h2>
      <Separator className="absolute left-0"/>

      <div className="pt-2">
        <ul className="space-y-4">
          <StackItem num="01" label="Language">
            {LANGUAGES.map(item => (
              <Badge key={item.key} variant="outline">{item.icon}{item.title}</Badge>
            ))}
          </StackItem>

          <StackItem num="02" label="Backend & Database">
            {BACKEND.map(item => (
              <Badge key={item.key} variant="outline">{item.icon}{item.title}</Badge>
            ))}
          </StackItem>

          <StackItem num="03" label="Frontend">
            {FRONTEND.map(item => (
              <Badge key={item.key} variant="outline">{item.icon}{item.title}</Badge>
            ))}
          </StackItem>

          <StackItem num="04" label="Tools and plataforms">
            {TOOLS.map(item => (
              <Badge key={item.key} variant="outline">{item.icon}{item.title}</Badge>
            ))}
          </StackItem>

          <StackItem num="05" label="Others">
            {OTHERS.map(item => (
              <Badge key={item.key} variant="outline">{item.icon}{item.title}</Badge>
            ))}
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
