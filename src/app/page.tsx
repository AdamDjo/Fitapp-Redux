'use client'
import { useTheme } from "@/contexts/themes/ThemeContext";
import { ThemeControls } from "@/shared/components/theme/ThemeControls";


export default function Home() {
  const { state,dispatch } = useTheme()
  return (
    <div className={`app theme-${state.theme} ${state.compactMode ? 'compact' : ''}`}>
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="header-title">
            💪 Fitness Tracker
          </h1>

          <div className="header-actions">
            <div className="status-badge">
              Étape 1: Thème configuré ✅
            </div>

            <button
              onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })}
              className="btn btn-ghost"
            >
              {state.sidebarCollapsed ? '☰' : '✕'}
            </button>
          </div>
        </div>
      </header>
      <div className="flex">
        {/* Sidebar */}
        <aside className={`sidebar ${state.sidebarCollapsed ? 'collapsed' : ''}`}>
          <nav className="sidebar-nav">
            <ul className="nav-list">
              {[
                { icon: '🏠', label: 'Dashboard', active: false },
                { icon: '🎨', label: 'Thème', active: true },
                { icon: '💪', label: 'Workouts', active: false },
                { icon: '📊', label: 'Progression', active: false },
              ].map((item, index) => (
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
           
        {/* Main Content */}
        <main className="main-content">
          <div className="container">
            
            {/* Welcome Card */}
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
            
            {/* Contrôles du thème */}
            <ThemeControls />
            
            {/* Prochaine étape */}
            <div className="gradient-card">
              <h3>🚀 Prochaine étape : Module Workouts</h3>
              <p>
                Une fois le thème configuré, nous allons ajouter Redux pour gérer 
                les entraînements et utiliser un contexte spécialisé pour les sessions.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 
     