'use client'
import { ThemeControls, ThemePreview } from "@/features/theme";
import { WorkoutButton } from "@/features/workout";

export default function Home() {
  return (
    <div className="container">
      <ThemePreview />
      <ThemeControls />
      
      <div className="gradient-card">
        <h3>🚀 Redux en action !</h3>
        <p>
          Voici votre premier component Redux fonctionnel. L'état est géré
          globalement et partagé dans toute l'application.
        </p>
        <WorkoutButton />
      </div>
    </div>
  )
}