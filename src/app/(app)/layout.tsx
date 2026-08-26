import SiteHeader from "../../components/site-header";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="relative isolate ">
      <SiteHeader/>
      <main className="max-w-screen px-2"> {children} </main>
    </div>
  )
}

