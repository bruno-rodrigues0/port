import { ReactNode } from "react"

export type Project = {
  key: string,
  title: string,
  meta: string | ReactNode,
  description: string | ReactNode,
  labels?: ReactNode,
  url: string,
  logo: string | ReactNode
}

export type TechStack = {
  key: string,
  title: string,
  url: string,
  icon: ReactNode
}


export type Education = {
  key: string,
  school: string,
  degree?: string,
  fieldOfStudy?: string,
  period: string | ReactNode,
  description: string | ReactNode,
  labels ?: ReactNode,
  logo: string | ReactNode
}
