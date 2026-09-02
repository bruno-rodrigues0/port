"use client"

import Link from "next/link";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { cn } from "../lib/utils";
import { BSMark } from "./bs-mark";

const INSPIRE_BY = ["Tailwind CSS", "shadcn/ui", "Vercel", "chanhdai.com"]


export function SiteFooter() {
  const [date, setDate] = useState(new Date().toLocaleDateString())

  return (
    <>
      <footer className="border-x border-line pt-8 max-w-180 mx-auto text-sm" id="credits">
        <div className="flex justify-between px-4 py-2 flex-wrap items-center">
          <p><Link href="https://port-amber-ten.vercel.app" className="underline text-primary">brunofzn.dev</Link></p>
          <p className="text-ring text-xs"> A pixel-perfect portifolio inspired by chanhdai.com</p>
        </div>

        <Separator className="absolute left-0" />

        <div className="flex max-sm:flex-col">
          <div className="flex flex-col flex-1 p-4 gap-2 justify-center border-b border-r border-muted">
            <span className="text-xs text-ring font-mono ">CREATED BY</span>
            <p><Link href="https://github.com/bruno-rodrigues0" className="underline">@bruno-rodrigues0</Link></p>
          </div>

          <div className="flex flex-col flex-1 p-4 gap-2 justify-center border-b border-r border-muted">
            <span className="text-xs text-ring font-mono ">DATE</span>
            <p>{date}</p>
          </div>

          <div className="flex flex-col flex-1 p-4 gap-2 justify-center border-b border-r border-muted">
            <span className="text-xs text-ring font-mono ">DEPLOYED ON</span>
            <p>
              <svg viewBox="0 0 24 24" aria-hidden width={18} >
                <path d="m12 3 10 17H2L12 3Z" fill="currentColor" />
              </svg>
            </p>
          </div>

          <div className="flex flex-col flex-1 p-4 gap-2 justify-center border-b border-muted">
            <span className="text-xs text-ring font-mono ">SOURCE CODE</span>
            <p><Link href="https://github.com/bruno-rodrigues0/port" className="underline">Github</Link> </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-1 p-4 pb-0 gap-2  border-muted">
            <span className="text-xs text-ring font-mono ">INSPIRED BY</span>
          </div>

          <div className="flex flex-wrap">
            {INSPIRE_BY.map((inspiration, index) => (
              <div key={index} className="flex flex-1 p-4 gap-2 text-nowrap border-muted">
                <span className="text-ring font-semibold font-mono">0{index} </span> {inspiration}
              </div>
            ))}
          </div>
        </div>

        <Separator className="absolute left-0" />

        <div className="flex px-4 py-1 justify-between">
          <BSMark className="w-7"/>
          <ul className="flex gap-2 p-2 items-center">
            <Link href="https://github.com/bruno-rodrigues0" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
              </svg>
            </Link>

            <Separator orientation="vertical"/>
            
            <Link href="https://www.linkedin.com/in/bruno-rodrigues0" target="_blank">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4">
                  <path d="M22.274 0H1.728C.692 0 0 .685 0 1.715v20.569C0 23.316.864 24 1.727 24h20.546C23.31 24 24 23.315 24 22.285V1.716C24.001.684 23.31 0 22.274 0M7.08 20.4H3.454V8.915h3.625zM5.352 7.371c-1.209 0-2.07-.856-2.07-2.056s.863-2.059 2.07-2.059c1.21 0 2.073.859 2.073 2.059S6.388 7.37 5.352 7.37M20.548 20.4h-3.626v-5.485c0-1.371 0-3.087-1.9-3.087-1.898 0-2.073 1.372-2.073 2.916V20.4H9.325V8.915h3.454v1.541c.69-1.2 2.073-1.885 3.453-1.885 3.627 0 4.316 2.4 4.316 5.485z" fill="currentColor"></path>
                </svg>
            </Link>
          </ul>
        </div>

      </footer>
      <Separator className="absolute left-0" />
    </>
  )
}
