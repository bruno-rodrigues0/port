import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, NavigationMenuItem} from "./ui/navigation-menu";
import { BSMark } from "./bs-mark";
import { Separator } from "./ui/separator";

export default function SiteHeader(){
  return (
    <header className="sticky top-0 z-50 h-auto p-2 mx-auto w-180 items-center bg-background">
    <div className="flex w-full justify-between">
      <Link href="/" className="content-center">
        <BSMark/>
      </Link>
       
      <NavigationMenu>
        <NavigationMenuList className="w-full flex justify-between">

          <NavigationMenuItem>
              <NavigationMenuLink className="text-xs">About</NavigationMenuLink>
          </NavigationMenuItem>

          <Separator orientation="vertical" />

          <NavigationMenuItem>
              <NavigationMenuLink className="text-xs">Projects</NavigationMenuLink>
          </NavigationMenuItem>

          <Separator orientation="vertical" />

          <NavigationMenuItem>
              <NavigationMenuLink className="text-xs">Contacts</NavigationMenuLink>
          </NavigationMenuItem>

          <Separator orientation="vertical" />

          <NavigationMenuItem>
              <NavigationMenuLink className="text-xs">Credits</NavigationMenuLink>
          </NavigationMenuItem>

        </NavigationMenuList>

      </NavigationMenu>
      <ModeToggle/>
    </div>
    <Separator className="absolute mt-2 left-0"/>
    </header>
  )
}
