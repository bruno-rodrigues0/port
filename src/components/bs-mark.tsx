import Image from "next/image";
import BSLogo from "@/assets/BS.png"

export function BSMark(props: React.ComponentProps<"svg">) {
  return (
    <Image 
      src={BSLogo}
      alt="BS Logo"
      width={30}
      height={30}
    />
  )
}
