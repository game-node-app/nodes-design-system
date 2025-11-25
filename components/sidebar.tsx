"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Palette, Box, Type, Layout, Layers, FileText, Code, Sparkles } from "lucide-react"

const navigation = [
  { name: "Getting Started", href: "/", icon: Home },
  { name: "Design Tokens", href: "/tokens", icon: Palette },
  { name: "Components", href: "/components", icon: Box },
  { name: "Typography", href: "/typography", icon: Type },
  { name: "Layout", href: "/layout", icon: Layout },
  { name: "Patterns", href: "/patterns", icon: Layers },
  { name: "Guidelines", href: "/guidelines", icon: FileText },
  { name: "Code Examples", href: "/examples", icon: Code },
  { name: "Resources", href: "/resources", icon: Sparkles },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r border-border bg-sidebar flex flex-col">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-5">
          <div className="space-y-3">
            <img src="/nodeslogo.svg" alt="Nodes" />
            <p className="text-xs text-muted-foreground">v1.0.0</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="w-4 h-4" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground space-y-1">
          <p>Last updated: Oct 2025</p>
          <p>Built with Next.js</p>
        </div>
      </div>
    </aside>
  )
}
