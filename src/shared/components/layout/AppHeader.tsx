import { useTheme } from "@/features/theme"

interface AppHeaderProps {
  title: string
  statusMessage?: string
}

export function AppHeader({ title, statusMessage }: AppHeaderProps) {
  const { state, dispatch } = useTheme()
  
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="header-title">
          {title}
        </h1>

        <div className="header-actions">
          {statusMessage && (
            <div className="status-badge">
              {statusMessage}
            </div>
          )}

          <button
            onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
            className="btn btn-ghost"
          >
            {state.sidebarCollapsed ? '☰' : '✕'}
          </button>
        </div>
      </div>
    </header>
  )
}