import Image from "next/image";
import { SpotlightLogo } from "./spotlight-logo";
import Me from "@/assets/me.webp"
import { VerifiedIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import { TextFlip } from "./text-flip";

export default function ProfileHeader() {
  return (
    <div className="screen-line-bottom grid grid-cols-[auto_1fr] grid-rows-[1fr_auto] overflow-y-clip border-x border-line">
      <div className="relative w-full h-87 col-span-2 p-2 sm:col-span-1 sm:col-start-2 sm:p-4 z-20">
      <figure className="absolute w-[115%] h-[115%] -top-12 -left-10 col-span-2 p-2 z-20">
        <div className="absolute rotate-30 border-t border-secondary w-full top-53 left-0 -z-10"></div>
        <div className="absolute rotate-30 border-t border-secondary w-[105%] top-54 -left-95.5 -z-10"></div>
        <div className="absolute -rotate-30 border-t border-secondary w-[105%] top-54 left-44 -z-10"></div>
        <SpotlightLogo/>

        <figcaption className="pointer-events-none absolute right-18 bottom-4 text-sm leading-none tracking-wide text-zinc-500 tabular-nums select-none ">
          Fig. 1.
        </figcaption>
      </figure>
      </div>

      <div className="flex flex-col sm:row-span-2 sm:row-start-1">
        <div className="screen-line-top mt-auto shrink-0 border-r border-line">
          <Separator className="absolute left-0 w-screen -z-10"/>
          <div className="group/avatar-lights-toggle mx-0.5 my-0.75 flex outline-none">
            <Image
              className="ring-border ring-offset-background rounded-full w-30 h-30"
              src={Me}
              alt="Photo of Bruno Silva"
            />
          </div >
        </div>
      </div>

      <div className="flex flex-col relative">
        <div className="z-1 mt-auto border-t border-line">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-[2rem]/none tracking-tight font-extrabold">
              Bruno Silva
            </h1>

            <VerifiedIcon className="size-4.5 select-none" aria-hidden />
          </div>

          <div className="h-12.5 border-t border-line py-1 pl-4 sm:h-9">
            <TextFlip className="text-sidebar-ring">
              {[
                <span key={0}>Computer Science Undergraduate.</span>, 
                <span key={1}>Creating with code.</span>,
                <span key={2}>Open source contributor.</span>
              ]}
            </TextFlip>
          </div>
        </div>
      </div>
    </div>   // </div>
  )
}
