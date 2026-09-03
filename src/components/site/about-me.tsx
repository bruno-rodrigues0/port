"use client"

import { useState } from "react"
import { Separator } from "../ui/separator"

export default function AboutMe(){
  const time = Number(new Date().toLocaleTimeString("pt-BR", {
    hour: 'numeric'
  }))

  const getGreating = () => {
    if (time >= 6 && time < 12) {
      return "Good morning"
    } else if (time >= 12 && time < 19) {
      return "Good afternoon"
    } else {
      return "Good evening"
    }
  }

  const [greating] = useState<string | null>(getGreating())

  return (
    <section id="about" className="border-x border-line w-full pt-8 p-4">
      <div>
        <h2 className="font-handwrite text-4xl font-bold text-balance">{greating}!</h2>
      </div>

      <Separator className="absolute left-0"/>

      <div className="pt-4">
        <ul className="list-disc marker:text-zinc-700 space-y-2 list-inside">
          <li><span>Hi, Im Bruno, a technology fascinated and enthusiast computer science. </span></li>
          <li><span>Pationated with ... </span></li>
          <li><span>Have experience with ...</span></li>
        </ul>
      </div>
    </section>
  )
}
