import { useTheme } from "@/contexts/themes/ThemeContext"

export function ThemeToggle() {
  const { state, dispatch } = useTheme()
  
  return (
    <button 
      onClick={() => dispatch({ 
        type: 'SET_THEME', 
        payload: state.theme === 'light' ? 'dark' : 'light' 
      })}
      className="theme-toggle"
    >
      {state.theme === 'light' ? '🌙' : '☀️'} 
      {state.theme === 'light' ? 'Mode sombre' : 'Mode clair'}
    </button>
  )
}