'use client'
import { useTheme, ThemeControls, ThemePreview } from "@/features/theme";
import { AppHeader, AppSidebar } from "@/shared/components/layout";

export default function Home() {
  const { state } = useTheme()
  
  const navItems = [
    { icon: '🏠', label: 'Dashboard', active: false },
    { icon: '🎨', label: 'Thème', active: true },
    { icon: '💪', label: 'Workouts', active: false },
    { icon: '📊', label: 'Progression', active: false },
  ]

  return (
    <div className={`app theme-${state.theme} ${state.compactMode ? 'compact' : ''}`}>
      <AppHeader
        title="💪 Fitness Tracker"
        statusMessage="Étape 1: Thème configuré ✅"
      />
      
      <div className="flex">
        <AppSidebar navItems={navItems} />
           
        {/* Main Content */}
        <main className="main-content">
          <div className="container">
            <ThemePreview />
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