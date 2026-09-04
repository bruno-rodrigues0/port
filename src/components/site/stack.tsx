import React from "react";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { BACKEND, FRONTEND, LANGUAGES, OTHERS, TOOLS } from "@/constants";
import Link from "next/link";
import { cn } from "../../lib/utils";

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
  
type StackItemProps = {
  num: string,
  label: string,
  className?: string,
  children: React.ReactNode, 
  props?: React.ComponentProps<"li">
}

export default function Stack() {
  return(
    <section className="border-x border-line pt-8 p-4" id="stack">
      <h2 className="text-4xl font-sans font-medium text-balance">Stack</h2>
      <Separator className="absolute left-0"/>

      <div className="pt-2">
        <ul className="space-y-5">

          {AREAS.map((area, index) => (
            <div key={index} className="space-y-3">
              <StackItem key={area.key} num={`0${index}`} label={area.key}>
                {area.value.map(item => (
                  <Link href={item.url} key={item.key} target="_blank">
                    <Badge variant="outline" className="bg-primary-foreground">{item.icon}{item.title}</Badge>
                  </Link>
                ))}
              </StackItem>
              <Separator className="absolute left-0 sm:hidden" />
            </div>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function StackItem({num, label, className, children, ...props}: StackItemProps) {
  return (
    <li className={cn(
      "grid grid-cols-6 font-mono max-sm:block max-sm:space-y-2",
      className
    )} {...props}>
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
