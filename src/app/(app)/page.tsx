import AboutMe from "../../components/about-me";
import GithubContrib from "../../components/github-contrib";
import Overview from "../../components/overview";
import ProfileHeader from "../../components/profile-header";
import SocialLinks from "../../components/social-links";
import Stack from "../../components/stack";
import { Separator } from "../../components/ui/separator";

export default function Home() {
  return (
    <div className="w-180 mx-auto">
      <ProfileHeader/>
      <GreatSeparator/>

      <Overview/>
      <Separator className="absolute left-0"/>

      <SocialLinks/>
      <Separator className="absolute left-0"/>

      <GithubContrib/>
      <GreatSeparator />

      <AboutMe />
      <GreatSeparator />
      
      <Stack />
      <GreatSeparator />
    </div>
  )
}

export function GreatSeparator(){
  return (
    <div className="absolute w-full left-0">
      <Separator className="absolute left-0"/>
      <div className="h-8 w-full bg-[repeating-linear-gradient(-45deg,var(--secondary)_0px,rgba(255,255,255,0.05)_2px,transparent_1px,transparent_8px)] flex justify-center">
      </div>
      <Separator className="absolute left-0"/>
    </div>
  )
}
