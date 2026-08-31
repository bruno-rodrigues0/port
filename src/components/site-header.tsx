import Link, { LinkProps } from "next/link";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, NavigationMenuItem} from "./ui/navigation-menu";
import { BSMark } from "./bs-mark";
import { Separator } from "./ui/separator";
import { ThemeSwitcher } from "./theme-switcher";
import { ReactNode } from "react";

export default function SiteHeader(){
  return (
    <>
    <header className="sticky top-0 z-50 h-auto py-2 items-center bg-background">
    <div className="flex justify-between w-180 mx-auto px-2">
      <a href="#" className="content-center">
        <BSMark/>
      </a>

      <div className="flex gap-2 items-center">
        <NavigationMenu>
          <NavigationMenuList className="w-full flex justify-between">

            <NavItem href="#about">About</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            <NavItem href="#">Contacts</NavItem>
            <NavItem href="#">Credits</NavItem>

          </NavigationMenuList>

        </NavigationMenu>
        <Separator orientation="vertical" className="h-[70%] mt-1"/>
        <ThemeSwitcher/>
      </div>
    </div>
    </header>
    <Separator className="fixed mt-2 left-0 top-10 z-100"/>
    </>
  )
}

const NavItem = ({children, href}: {children: ReactNode, href: string}) => {
  return (
    <NavigationMenuItem>
        <NavigationMenuLink 
          className="text-ms font-mono text-muted-foreground hover:bg-inherit hover:text-primary focus:bg-inherit " 
          href={href}
        >
          {children}
        </NavigationMenuLink>
    </NavigationMenuItem>
  )
}
