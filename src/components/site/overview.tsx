"use client"

import { Clock, CodeXml, Link, LucideProps, Mail, MapPin, Mars, Phone} from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

const localeOpts: Intl.DateTimeFormatOptions = {timeZone: 'America/Sao_Paulo', hour: 'numeric', minute: 'numeric'}

export default function Overview(){

  const [time, setTime] = useState(new Date().toLocaleTimeString("pt-BR", localeOpts))

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date().toLocaleTimeString("pt-BR", localeOpts));
    }, 5000);

    return () => clearInterval(timerId);
  })

  return (
    <section className="border-x border-line pt-12 p-4 grid grid-cols-2 max-sm:grid-cols-1 gap-4">
        <div>
          <dl className="flex flex-col gap-4 font-sans">
              <OverviewItem term="Job" text="Computer Scientist: CIn - UFPE"><CodeXml size={15}/></OverviewItem>
              <OverviewItem term="Location" text="Recife - PE, Brazil"><MapPin size={15}/></OverviewItem>
              <OverviewItem term="Email" text="brunorodriguesmtv0@gmail.com"><Mail size={15}/></OverviewItem>
              <OverviewItem term="Phone number" text="+55 38 99737 5691"><Phone size={15}/></OverviewItem>
              <OverviewItem term="Site" text="brunofzn.dev"><Link size={15}/></OverviewItem>
          </dl>
        </div>

        <div className="flex items-end">
          <dl className="flex flex-col gap-4 font-mono">
            <OverviewItem term="Time" text={(
              <>{time} <span className="text-muted-foreground">(GMT-03)</span></>
            )}><Clock size={15}/></OverviewItem>
            <OverviewItem term="Pronouns" text="he/him"><Mars size={15}/></OverviewItem>
          </dl>
        </div>
    </section>
  )
}

export function OverviewItem({children, term, text}: {children: ReactNode, term:string, text:string | ReactNode}) {
  return(
    <div className="flex gap-2 items-center text-sm font-medium">
      <IconBox> {children} </IconBox>
      <dt className="sr-only">{term}</dt>
      <dd>
        {text}
      </dd>
    </div>
  )
}

export function IconBox({children}: LucideProps){
  return (
    <div className="border rounded-sm bg-primary-foreground p-1 w-fit flex justify-center items-center">
      {children}
    </div>
  )
}
