import { useTheme } from "@/contexts/themes/ThemeContext"

export function LayoutControls() {
  const { state, dispatch } = useTheme()
  
  return (
    <div className="layout-controls">
      <label className="control-item">
        <input 
          type="checkbox" 
          checked={state.sidebarCollapsed} 
          onChange={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
        />
        Sidebar réduite
      </label>
      
      <label className="control-item">
        <input 
          type="checkbox" 
          checked={state.compactMode} 
          onChange={(e) => dispatch({ 
            type: 'SET_COMPACT_MODE', 
            payload: e.target.checked 
          })}
        />
        Mode compact
      </label>
    </div>
  )
}