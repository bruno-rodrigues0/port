import { Separator } from "@/components/ui/separator";
import { EducationItem } from "./education-item";
import { EDUCATION } from "../../constants";


export default function Education() {
  return (
    <section className="border-x border-line pt-8 p-4" id="education">
      <h2 className="text-4xl font-medium text-balance">Education</h2>
      <Separator className="absolute left-0"/>
      <div className="screen-line-bottom scroll-mt-14 pr-2">
        {EDUCATION.map(item => (
          <div key={item.key} className="pt-1">
            <div key={item.key}>
              <EducationItem key={item.key} item={item}/>
            </div>
            <div>
              <Separator className="absolute left-0"/>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

