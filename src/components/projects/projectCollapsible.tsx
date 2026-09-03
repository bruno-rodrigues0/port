"use client"

import { useRef, useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { Separator } from "../ui/separator"
import { Project } from "@/constants"
import { ChevronsUpDownIcon, ChevronsUpDownIconHandle } from "../chevrons-up-down-icon"
import { Link as LinkIcon } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"

export default function ProjectCollapsible({project, defaultOpen = false}: {project: Project, defaultOpen?: boolean}) {
  const [open, setOpen] = useState(defaultOpen)
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
      <Collapsible className="py-4 transition-all" defaultOpen={defaultOpen} open={open} onOpenChange={handleOpen}>
        <div className="flex max-w-full items-center">
          <div className="flex-1 flex justify-start">
            <div className="bg-primary-foreground border border-muted rounded-md w-8 h-8 p-2 flex items-center justify-center">
              {project.logo}
            </div>
          </div>

          <CollapsibleTrigger className="flex w-full ml-2 pr-2 items-center rounded-md transition-all ease-in-out hover:bg-primary-foreground">
            <div className="w-full flex flex-col justify-start h-auto px-4">
              <p className="text-start">{project.title}</p>
              <span className="text-sm text-muted-foreground">{project.meta}</span>
            </div>

            <div className="flex-1 flex justify-end items-center gap-2">
              <HoverCard>
                <HoverCardTrigger delay={.1} href={project.url}>
                  <LinkIcon className="w-5.5 h-5.5 p-1"/>
                </HoverCardTrigger>
                <HoverCardContent className="w-fit">
                  <span>Go to project</span>
                </HoverCardContent>
              </HoverCard>

              <div className="text-muted-foreground [&_svg]:h-lh [&_svg]:w-4">
                <ChevronsUpDownIcon ref={chevronsRef} className="tecursor-pointer"/>
              </div>
            </div>
          </CollapsibleTrigger>
        </div>

        <CollapsibleContent>
          <div className="py-2">
            <Separator className="absolute left-0"/>
            <div className="pt-4 space-y-4 text-sm">
              <p>{project.description}</p>
              <span className="flex gap-2 flex-wrap">{project.labels}</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator className="absolute left-0"/>
    </>
  )
}
