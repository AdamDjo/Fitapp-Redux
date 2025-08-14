import { useTheme } from "@/contexts/themes/ThemeContext"
import { THEME_COLORS } from "@/shared/constants"

export function ColorPicker() {
  const { state, dispatch } = useTheme()
  
  const colors = Object.entries(THEME_COLORS)
              console.log(colors)

 return (
    <div className="color-picker">
      <h4>Couleur principale</h4>
      <div className="color-grid">
        {colors.map(([name, color]) => (
          <button
            key={name}
            className={`color-option ${state.primaryColor === color ? 'active' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => dispatch({
              type: 'SET_COLORS',
              payload: { primaryColor: color }
            })}
            title={name}
          />
        ))}
      </div>
    </div>
  )
}
