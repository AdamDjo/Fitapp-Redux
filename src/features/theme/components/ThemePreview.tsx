import { useTheme } from "../context/ThemeContext"

export function ThemePreview() {
  const { state } = useTheme()
  
  return (
    <div className="card mb-6">
      <div className="card-content">
        <h2 className="text-xl font-bold mb-4">
          Bienvenue ! 🎯
        </h2>
        <p className="card-subtitle mb-6">
          Commençons par configurer l'apparence de votre application.
        </p>
        
        {/* Preview des couleurs */}
        <div className="preview-grid">
          {[
            { title: 'Couleur Primaire', color: state.primaryColor },
            { title: 'Couleur Accent', color: state.accentColor },
            { title: 'Mode', color: state.theme === 'light' ? '#f3f4f6' : '#374151' }
          ].map((item, index) => (
            <div key={index} className="preview-card">
              <div 
                className="preview-circle"
                style={{ backgroundColor: item.color }}
              />
              <div className="preview-title">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}