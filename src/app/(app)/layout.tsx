import { Home, Palette, Dumbbell, TrendingUp, Bell, User, Menu } from 'lucide-react'
import { cookies } from "next/headers"
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset
} from "@/shared/ui/organisms"
import { Button, Badge } from "@/shared/ui/atoms"
import { Avatar, AvatarFallback } from "@/shared/ui/molecules"

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  const navItems = [
    {
      icon: Home,
      label: 'Dashboard',
      href: '/'
    },
    {
      icon: Palette,
      label: 'Thème',
      href: '/theme'
    },
    {
      icon: Dumbbell,
      label: 'Workouts',
      href: '/workout'
    },
    {
      icon: TrendingUp,
      label: 'Progression',
      href: '/progression'
    },
  ]

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <div className="flex h-screen w-full ">
        {/* Sidebar */}
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-3 px-2 py-1">
              <Dumbbell className="h-6 w-6 text-primary" />
              <h2 className="font-semibold text-lg">Fitness Tracker</h2>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navItems.map((item) => (
                    <SidebarMenuItem key={item.href}>
                      <SidebarMenuButton asChild>
                        <a href={item.href}>
                          <item.icon />
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter>
            <div className="flex items-center gap-3 px-2 py-1">
              <Avatar className="h-8 w-8">
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-sm font-medium truncate">Utilisateur</span>
                <span className="text-xs text-muted-foreground truncate">user@example.com</span>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <SidebarInset className="flex flex-col">
          {/* Header */}
          <header className="border-b">
            <div className="container mx-auto flex h-16 max-w-7xl items-center gap-4 px-6">
              <SidebarTrigger />
              <div className="flex flex-1 items-center justify-between">
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold">Application Fitness</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-4 w-4" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs">
                      3
                    </Badge>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto max-w-7xl p-6">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t">
            <div className="container mx-auto max-w-7xl p-4 text-center text-sm text-muted-foreground">
              © 2024 Fitness Tracker - Powered by ShadCN
            </div>
          </footer>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}