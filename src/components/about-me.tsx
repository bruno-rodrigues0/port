import { Separator } from "./ui/separator"

export default function AboutMe(){
  return (
    <div className="border-x border-line w-full pt-8 p-4">
      <div>
        <h2 className="font-handwrite text-3xl">Good morning</h2>
      </div>

      <Separator className="absolute left-0"/>

      <div className="pt-4">
        <ul className="list-disc marker:text-zinc-700 px-4 space-y-2">
          <li><span>Hi, Im Bruno, a technology fascinated and enthusiast computer science. </span></li>
          <li><span>Pationated with ... </span></li>
          <li><span>Have experience with ...</span></li>
        </ul>
      </div>
    </div>
  )
}
