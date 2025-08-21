import { useTheme } from "@/features/theme"
import Link from "next/link"

interface NavItem {
  icon: string
  label: string
  active: boolean
  href: string
}

interface AppSidebarProps {
  navItems: NavItem[]
}

export function AppSidebar({ navItems }: AppSidebarProps) {
  const { state } = useTheme()
  
  return (
    <aside className={`sidebar ${state.sidebarCollapsed ? 'collapsed' : ''}`}>
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <div className={`nav-item ${item.active ? 'active' : ''}`}>
                  <span className="nav-icon">{item.icon}</span>
                  {!state.sidebarCollapsed && (
                    <span className="nav-label">{item.label}</span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}