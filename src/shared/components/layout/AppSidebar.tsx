import { useTheme } from "@/features/theme"

interface NavItem {
  icon: string
  label: string
  active: boolean
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
              <div className={`nav-item ${item.active ? 'active' : ''}`}>
                <span className="nav-icon">{item.icon}</span>
                {!state.sidebarCollapsed && (
                  <span className="nav-label">{item.label}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}