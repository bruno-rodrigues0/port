import { Clock, CodeXml, LucideProps, Mail, MapPin, Mars} from "lucide-react";


export default function Overview(){
  return (
    <div className="w-180 border-x border-line pt-12 p-4 grid grid-cols-2">
        <div>
          <ul className="flex flex-col gap-4 font-mono">
            <li className="flex gap-2 items-center"><IconBox> <CodeXml size={15}/> </IconBox> Computer Scientist: CIn-UFPE </li>
            <li className="flex gap-2 items-center"><IconBox> <MapPin size={15}/> </IconBox> Recife - PE, Brazil </li>
            <li className="flex gap-2 items-center"><IconBox> <Mail size={15}/> </IconBox> brs3@cin.ufpe.br </li>
          </ul>
        </div>

        <div className="flex items-end">
          <ul className="flex flex-col gap-4 font-mono">
            <li className="flex gap-2"><IconBox> <Clock size={15}/> </IconBox> 08:06 PM</li>
            <li className="flex gap-2"><IconBox> <Mars size={15}/> </IconBox> he/him </li>
          </ul>
        </div>
    </div>
  )
}

export function IconBox({children}: LucideProps){
  return (
    <div className="border border-line rounded-md bg-secondary p-1 w-fit flex justify-center items-center">
      {children}
    </div>
  )
}
