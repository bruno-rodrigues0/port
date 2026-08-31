"use client"

import { useRef, useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible"
import { Separator } from "./ui/separator"
import { Project } from "@/constants"
import { ChevronsUpDownIcon, ChevronsUpDownIconHandle } from "./chevrons-up-down-icon"
import { Link as LinkIcon } from "lucide-react"
import Link from "next/link"

export default function ProjectCollapsible({project, openProp = false}: {project: Project, openProp?: boolean}) {
  const [open, setOpen] = useState(openProp)
  const chevronsRef = useRef<ChevronsUpDownIconHandle>(null)

  const handleOpen = () => {
    setOpen(prev => !prev)
    if (open) {
      chevronsRef.current?.stopAnimation()
    } else {
      chevronsRef.current?.startAnimation()
    }
  }

  return (
    <>
      <Collapsible className="py-4 transition-all" open={open} onOpenChange={handleOpen}>
        <div className="flex w-full">
          <div className="flex-1">
            <figure className="">
              {project.logo}
            </figure>
          </div>

          <div className="min-w-10/12 flex flex-col justify-center">
            <p>{project.title}</p>
            <span>{project.labels}</span>
          </div>

          <div className="flex-1 flex justify-end items-center gap-2">
            <Link href={project.url}>
              <LinkIcon className="w-6.5 h-6.5 border border-muted bg-primary-foreground rounded-md p-1"/>
            </Link>
            <CollapsibleTrigger><ChevronsUpDownIcon ref={chevronsRef} className="w-6.5 h-6.5 border border-muted bg-primary-foreground rounded-md p-1"/></CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent>
          <div className="py-2">
            <Separator className="absolute left-0"/>
            <div className="pt-4">
              {project.description} 
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator className="absolute left-0"/>
    </>
  )
}
