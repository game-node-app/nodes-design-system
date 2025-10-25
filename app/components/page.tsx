import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ComponentsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-auto px-6 py-8">
          <div className="max-w-6xl">
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                UI Library
              </Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">Components</h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                Production-ready components built with accessibility and customization in mind. Each component is fully
                documented with code examples and usage guidelines.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Buttons</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                  <CardDescription>Multiple button styles for different use cases and hierarchies</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="preview">
                    <TabsList>
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview" className="space-y-4 pt-4">
                      <div className="flex flex-wrap gap-4">
                        <Button>Primary Button</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="destructive">Destructive</Button>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <Button size="sm">Small</Button>
                        <Button size="default">Default</Button>
                        <Button size="lg">Large</Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="code" className="pt-4">
                      <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm font-mono text-foreground">
                          {`<Button>Primary Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}
                        </code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Cards</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Card Component</CardTitle>
                  <CardDescription>Flexible container for grouping related content</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="preview">
                    <TabsList>
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview" className="pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card description goes here</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              This is the card content area where you can place any content.
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>Another Card</CardTitle>
                            <CardDescription>With different content</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              Cards are versatile and can contain any type of content.
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    <TabsContent value="code" className="pt-4">
                      <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm font-mono text-foreground">
                          {`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>`}
                        </code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6">Form Inputs</h2>
              <Card>
                <CardHeader>
                  <CardTitle>Input Fields</CardTitle>
                  <CardDescription>Text inputs with various states and configurations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="preview">
                    <TabsList>
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="preview" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Default Input</label>
                        <Input placeholder="Enter text..." />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Disabled Input</label>
                        <Input placeholder="Disabled" disabled />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">With Value</label>
                        <Input value="Example value" readOnly />
                      </div>
                    </TabsContent>
                    <TabsContent value="code" className="pt-4">
                      <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm font-mono text-foreground">
                          {`<Input placeholder="Enter text..." />
<Input placeholder="Disabled" disabled />
<Input value="Example value" readOnly />`}
                        </code>
                      </pre>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
