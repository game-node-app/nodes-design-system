import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Users, Shield, Layers } from "lucide-react"

const principles = [
  {
    title: "Performance First",
    description: "Optimized for speed and efficiency. Every component is built with performance in mind.",
    icon: Zap,
  },
  {
    title: "Accessible by Default",
    description: "WCAG 2.1 AA compliant. Inclusive design that works for everyone.",
    icon: Users,
  },
  {
    title: "Type Safe",
    description: "Built with TypeScript. Catch errors before they reach production.",
    icon: Shield,
  },
  {
    title: "Composable",
    description: "Mix and match components to create complex interfaces with ease.",
    icon: Layers,
  },
]

export function DesignPrinciples() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl">
        <h2 className="text-3xl font-bold text-foreground mb-4">Design Principles</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Our design system is built on core principles that guide every decision we make.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle) => {
            const Icon = principle.icon
            return (
              <Card key={principle.title} className="bg-card border-border">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
