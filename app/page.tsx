import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { QuickLinks } from "@/components/quick-links"
import { DesignPrinciples } from "@/components/design-principles"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto">
          <Hero />
          <QuickLinks />
          <DesignPrinciples />
        </main>
      </div>
    </div>
  )
}
