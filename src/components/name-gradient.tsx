import { Separator } from "@base-ui/react";
import { FluidGradientText } from "./fluid-gradient-text";

export function NameGradient() {
  return(
    <section className="w-full">
      <FluidGradientText text="brunofzn"/>
      <Separator />
      <div className="w-full h-25 max-sm:hidden"/>
    </section>
  )
}
