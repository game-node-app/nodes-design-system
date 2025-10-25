import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Box, Type, FileText, ArrowRight } from "lucide-react"

const links = [
  {
    title: "Design Tokens",
    description: "Colors, typography, spacing, and other foundational design decisions",
    icon: Palette,
    href: "/tokens",
  },
  {
    title: "Components",
    description: "Reusable UI components with code examples and best practices",
    icon: Box,
    href: "/components",
  },
  {
    title: "Typography",
    description: "Type scales, font families, and text styling guidelines",
    icon: Type,
    href: "/typography",
  },
  {
    title: "Guidelines",
    description: "Design principles, accessibility standards, and usage patterns",
    icon: FileText,
    href: "/guidelines",
  },
]

export function QuickLinks() {
  return (
    <section className="px-6 py-16 border-b border-border">
      <div className="max-w-6xl">
        <h2 className="text-3xl font-bold text-foreground mb-8">Quick Start</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Link key={link.title} href={link.href}>
                <Card className="h-full transition-colors hover:bg-accent/50 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-foreground">{link.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{link.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
