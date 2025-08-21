'use client'

import { useAppSelector, useAppDispatch } from '@/store'
import { startSession, endSession, selectIsSessionActive } from '@/features/workout'

export default function WorkoutButton() {
  const isActive = useAppSelector(selectIsSessionActive)
  const dispatch = useAppDispatch()

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2>Session d'entraînement</h2>
      
      <p>Statut: {isActive ? '🟢 EN COURS' : '🔴 ARRÊTÉE'}</p>
      
      {!isActive ? (
        <button 
          onClick={() => dispatch(startSession())}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          ▶️ Démarrer l'entraînement
        </button>
      ) : (
        <button 
          onClick={() => dispatch(endSession())}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          ⏹️ Arrêter l'entraînement
        </button>
      )}
    </div>
  )
}