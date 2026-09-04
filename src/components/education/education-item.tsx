"use client"
import { useRef, useState } from "react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { cn } from "../../lib/utils"
import { GraduationCapIcon, Infinity } from "lucide-react"
import { ChevronsUpDownIcon, ChevronsUpDownIconHandle } from "../chevrons-up-down-icon"
import { Separator } from "../ui/separator"
import { Education } from "@/types"
import { Badge } from "../ui/badge"

export function EducationItem({ item, defaultOpen }: { item: Education, defaultOpen: boolean}) {
  const [open, setOpen] = useState<boolean>(defaultOpen)
  const chevronsRef = useRef<ChevronsUpDownIconHandle>(null)
  const {start, end} = item.period

  const handleOpenChange = () => {
    setOpen(prev => !prev)
    if (open) {
      chevronsRef.current?.stopAnimation()
    } else {
      chevronsRef.current?.startAnimation()
    }
  }

  return (
    <div className="group/education-item relative before:absolute before:left-3 before:h-full before:w-px before:bg-muted mb-4 mt-4">
      <div
        className="pointer-events-none absolute bottom-0 left-3 hidden size-4 bg-background group-last/education-item:flex"
        aria-hidden
      >
        <span className="size-full -translate-y-2.25 rounded-bl-sm border-b border-l" />
      </div>

      <Collapsible defaultOpen={defaultOpen} open={open} disabled={!item.description} onOpenChange={handleOpenChange}>
        <CollapsibleTrigger
          className={cn(
            "block w-full text-left",
            "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg before:transition-[background-color] before:ease-out hover:before:bg-primary-foreground",
            "outline-none focus-visible:before:inset-ring-2 focus-visible:before:inset-ring-ring/50",
            "data-disabled:before:content-none"
          )}
        >
          <div className="relative z-1 mb-1 flex items-start gap-3 text-base">
            <div className="bg-primary-foreground border border-muted rounded-md [&_svg]:h-4 [&_svg]:w-4 p-1 flex items-center justify-center">
              <GraduationCapIcon />
            </div>

            <h3 className="flex-1 font-medium text-balance">{item.school}</h3>

            <div className="shrink-0 text-muted-foreground group-data-disabled:hidden [&_svg]:h-lh [&_svg]:w-4">
              <ChevronsUpDownIcon ref={chevronsRef} duration={0.15} />
            </div>
          </div>

          <dl className="flex flex-wrap items-center gap-x-2 pl-9 text-sm text-muted-foreground">
            <div>
              <dt className="sr-only">Study period</dt>
              <dd className="flex items-center gap-0.5 tabular-nums">
                <p className="flex items-center gap-1">
                  {start} - {end ? end : <Infinity width={18}/>}
                </p>
              </dd>
            </div>

            {item.degree && (
              <>
                <Separator
                  className="data-vertical:h-4 data-vertical:self-center"
                  orientation="vertical"
                  aria-hidden
                />

                <div>
                  <dt className="sr-only">Degree</dt>
                  <dd>{item.degree}</dd>
                </div>
              </>
            )}

            {item.fieldOfStudy && (
              <>
                <Separator
                  className="data-vertical:h-4 data-vertical:self-center"
                  orientation="vertical"
                  aria-hidden
                />

                <div>
                  <dt className="sr-only">Field of study</dt>
                  <dd>{item.fieldOfStudy}</dd>
                </div>
              </>
            )}
          </dl>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden">
          {item.description && (
            <div className="pt-3 pb-1 pl-9 text-sm">
              {item.description}
            </div>
          )}
        </CollapsibleContent>

        <div className="flex flex-wrap gap-1.5 pt-3 pl-9">
          <span className="flex gap-2 flex-wrap">
            {item.labels?.map((label, index) => (
              <Badge variant="outline" className="bg-primary-foreground" key={index}>{label}</Badge>
            ))}
          </span>
        </div>

      </Collapsible>
    </div>
  )
}
