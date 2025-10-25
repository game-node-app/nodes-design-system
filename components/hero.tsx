import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="px-6 py-16 border-b border-border">
      <div className="max-w-4xl">
        <Badge variant="secondary" className="mb-4">
          Version 2.0.0 • Updated Oct 2025
        </Badge>

        <h1 className="text-5xl font-bold text-foreground mb-6 text-balance">Design System Documentation</h1>

        <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
          A comprehensive design system built for scale. Create consistent, accessible, and beautiful user interfaces
          with our battle-tested components and guidelines.
        </p>

        <div className="flex items-center gap-4">
          <Button size="lg" className="gap-2">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            <Download className="w-4 h-4" />
            Download Assets
          </Button>
        </div>
      </div>
    </section>
  )
}
