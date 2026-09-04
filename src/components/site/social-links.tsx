import Link from "next/link";
import { ReactNode } from "react";
import { GithubIcon, LinkedInIcon, WhatsappIcon } from "../icons";
import { LINKS } from "../../lib/site-config";


export default function SocialLinks(){
  return (
    <section className="border-x p-2 flex" id="social-links">
      <ul className="flex gap-2 p-2">
        <SocialLink href={LINKS.githubProfile}>
          <GithubIcon className="w-5 h-5"/>
        </SocialLink>

        <SocialLink href={LINKS.linkedIn}>
          <LinkedInIcon className="w-5 h-5"/>
        </SocialLink>

        <SocialLink href={LINKS.whatsapp} >
          <WhatsappIcon className="w-5 h-5"/>
        </SocialLink>
      </ul>
    </section>
  )
}

export function SocialLink({children, href}: {children: ReactNode, href: string}) {
  return (
    <li className="border border-line rounded-sm p-1.5 bg-primary-foreground">
      <Link href={href} target="_blank">
        {children}
      </Link>
    </li>
  )
}
