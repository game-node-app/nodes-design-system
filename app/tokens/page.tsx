import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const colorTokens = [
  { name: "Primary", value: "oklch(0.7 0.19 230)", hex: "#5B8EF5", usage: "Primary actions, links, focus states" },
  { name: "Background", value: "oklch(0.09 0 0)", hex: "#171717", usage: "Main background color" },
  { name: "Foreground", value: "oklch(0.98 0 0)", hex: "#FAFAFA", usage: "Primary text color" },
  { name: "Muted", value: "oklch(0.18 0 0)", hex: "#2D2D2D", usage: "Subtle backgrounds, disabled states" },
  { name: "Border", value: "oklch(0.2 0 0)", hex: "#333333", usage: "Borders, dividers" },
]

const spacingTokens = [
  { name: "xs", value: "0.25rem", pixels: "4px" },
  { name: "sm", value: "0.5rem", pixels: "8px" },
  { name: "md", value: "1rem", pixels: "16px" },
  { name: "lg", value: "1.5rem", pixels: "24px" },
  { name: "xl", value: "2rem", pixels: "32px" },
  { name: "2xl", value: "3rem", pixels: "48px" },
]

export default function TokensPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto px-6 py-8">
          <div className="max-w-6xl">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                Foundation
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">Design Tokens</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Design tokens are the visual design atoms of the design system. They store visual design attributes and
                ensure consistency across all platforms and products.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Color Tokens</h2>
              <div className="grid gap-4">
                {colorTokens.map((token) => (
                  <Card key={token.name}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <div
                          className="w-20 h-20 rounded-lg border border-border flex-shrink-0"
                          style={{ backgroundColor: token.hex }}
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-1">{token.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{token.usage}</p>
                          <div className="flex gap-4 text-xs font-mono">
                            <div>
                              <span className="text-muted-foreground">OKLCH: </span>
                              <span className="text-foreground">{token.value}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">HEX: </span>
                              <span className="text-foreground">{token.hex}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Spacing Scale</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {spacingTokens.map((token) => (
                      <div key={token.name} className="flex items-center gap-6">
                        <div className="w-24 text-sm font-mono text-foreground">{token.name}</div>
                        <div className="h-8 bg-primary rounded" style={{ width: token.value }} />
                        <div className="text-sm text-muted-foreground font-mono">
                          {token.value} ({token.pixels})
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Typography Scale</h2>
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="text-4xl font-bold text-foreground mb-2">Heading 1</div>
                    <p className="text-sm text-muted-foreground font-mono">36px / 2.25rem • font-bold</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground mb-2">Heading 2</div>
                    <p className="text-sm text-muted-foreground font-mono">30px / 1.875rem • font-bold</p>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold text-foreground mb-2">Heading 3</div>
                    <p className="text-sm text-muted-foreground font-mono">24px / 1.5rem • font-semibold</p>
                  </div>
                  <div>
                    <div className="text-base text-foreground mb-2">Body Text</div>
                    <p className="text-sm text-muted-foreground font-mono">16px / 1rem • font-normal</p>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Small Text</div>
                    <p className="text-sm text-muted-foreground font-mono">14px / 0.875rem • font-normal</p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
