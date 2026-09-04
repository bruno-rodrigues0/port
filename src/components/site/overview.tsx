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
    <section className="border-x border-line pt-12 p-4 ">
      <dl className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
        <div>
          <ul className="flex flex-col gap-4 font-sans">
              <dt className="sr-only">Role</dt>
              <dd><OverviewItem text="Cumputer Scientist: CIn - UFPE"><CodeXml size={15}/></OverviewItem></dd>
              <dt className="sr-only">Location</dt>
              <dd><OverviewItem text="Recife - PE, Brazil"><MapPin size={15}/></OverviewItem></dd>
              <dt className="sr-only">Email</dt>
              <dd><OverviewItem text="brunorodriguesmtv0@gmail.com"><Mail size={15}/></OverviewItem></dd>
              <dt className="sr-only">Cellphone number</dt>
              <dd><OverviewItem text="+55 38 99737 5691"><Phone size={15}/></OverviewItem></dd>
              <dt className="sr-only">Site</dt>
              <dd><OverviewItem text="brunofzn.dev"><Link size={15}/></OverviewItem></dd>
          </ul>
        </div>

        <div className="flex items-end">
          <ul className="flex flex-col gap-4 font-mono">
            <dt className="sr-only">Time</dt>
            <dd>
              <OverviewItem text={(
                <>{time} <span className="text-muted-foreground">(GMT-03)</span></>
              )}><Clock size={15}/></OverviewItem>
            </dd>
            <dt className="sr-only">Gender / Pronoums</dt>
            <dd><OverviewItem text="he/him"><Mars size={15}/></OverviewItem></dd>
          </ul>
        </div>
      </dl>
    </section>
  )
}

export function OverviewItem({children, text}: {children: ReactNode, text:string | ReactNode}) {
  return(
    <li className="flex gap-2 items-center text-sm font-medium"><IconBox> {children} </IconBox> {text} </li>
  )
}

export function IconBox({children}: LucideProps){
  return (
    <div className="border rounded-sm bg-primary-foreground p-1 w-fit flex justify-center items-center">
      {children}
    </div>
  )
}
