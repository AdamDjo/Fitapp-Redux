'use client'
import { WorkoutButton } from "@/features/workout";

export default function WorkoutPage() {
  return (
    <div className="container">
      <div className="gradient-card">
        <h2>💪 Mes Workouts</h2>
        <p>Bienvenue sur votre page d'entraînement !</p>
        
        <div className="mt-6">
          <WorkoutButton />
        </div>
        
        <div className="mt-8">
          <h3>🏋️ Fonctionnalités à venir:</h3>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Créer des programmes d'entraînement</li>
            <li>Suivre vos séances</li>
            <li>Historique des workouts</li>
            <li>Statistiques de progression</li>
          </ul>
        </div>
      </div>
    </div>
  )
}