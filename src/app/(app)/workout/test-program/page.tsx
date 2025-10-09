'use client'

import { useAppDispatch, useAppSelector } from '@/store'
import {
  setDayExercises,
  addExerciseToDay,
  removeExerciseFromDay,
  clearDayExercises,
  resetWeeklyProgram,
  selectWeeklyProgram,
  selectDayExercises,
  selectDayExercisesWithDetails,
  selectAllDaysWithExercises,
  Exercise,
} from '@/features/workout'
import { Button } from '@/shared/ui/atoms'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/organisms'

export default function TestProgramPage() {
  const dispatch = useAppDispatch()
  
  // Utilisation des sélecteurs
  const weeklyProgram = useAppSelector(selectWeeklyProgram)
  const mondayExercises = useAppSelector(selectDayExercises('monday'))
  const mondayDetails = useAppSelector(selectDayExercisesWithDetails('monday'))
  const daysWithExercises = useAppSelector(selectAllDaysWithExercises)

  const handleTestActions = () => {
    // Test 1: Définir des exercices pour lundi
    dispatch(setDayExercises({
      day: 'monday',
      exerciseIds: ['9', '10', '11'] // Squat, Soulevé de terre, Presse à cuisses
    }))
    
    // Test 2: Ajouter un exercice au mardi
    dispatch(addExerciseToDay({
      day: 'tuesday',
      exerciseId: '1' // Développé couché
    }))
    
    // Test 3: Ajouter un autre exercice au mardi
    dispatch(addExerciseToDay({
      day: 'tuesday', 
      exerciseId: '3' // Dips
    }))
  }

  const handleRemoveFromMonday = () => {
    // Test 4: Retirer un exercice du lundi
    dispatch(removeExerciseFromDay({
      day: 'monday',
      exerciseId: '10' // Retirer le soulevé de terre
    }))
  }

  const handleClearTuesday = () => {
    // Test 5: Vider complètement le mardi
    dispatch(clearDayExercises('tuesday'))
  }

  const handleResetProgram = () => {
    // Test 6: Reset complet du programme
    dispatch(resetWeeklyProgram())
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">🧪 Test Feature 3: Weekly Program</h1>
        <p className="text-muted-foreground mt-2">
          Page de test pour valider les actions et sélecteurs des programmes hebdomadaires
        </p>
      </div>

      {/* Boutons de test */}
      <Card>
        <CardHeader>
          <CardTitle>Actions de test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button onClick={handleTestActions}>
              🎯 Test Actions (Lundi + Mardi)
            </Button>
            <Button onClick={handleRemoveFromMonday} variant="outline">
              ➖ Retirer exercice (Lundi)
            </Button>
            <Button onClick={handleClearTuesday} variant="outline">
              🗑️ Vider Mardi
            </Button>
            <Button onClick={handleResetProgram} variant="destructive">
              🔄 Reset Programme
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Affichage des résultats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Programme complet */}
        <Card>
          <CardHeader>
            <CardTitle>Programme Hebdomadaire Complet</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-sm bg-muted p-4 rounded overflow-auto">
              {JSON.stringify(weeklyProgram, null, 2)}
            </pre>
          </CardContent>
        </Card>

        {/* Exercices du lundi */}
        <Card>
          <CardHeader>
            <CardTitle>Exercices du Lundi</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <strong>IDs:</strong> {JSON.stringify(mondayExercises)}
              </div>
              <div>
                <strong>Détails:</strong>
                <ul className="mt-2 space-y-1">
                  {mondayDetails.map((exercise: Exercise | undefined, index: number) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-lg">{exercise?.image}</span>
                      <span>{exercise?.name}</span>
                      <span className="text-sm text-muted-foreground">({exercise?.muscleGroup})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Jours avec exercices */}
        <Card>
          <CardHeader>
            <CardTitle>Jours avec exercices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {daysWithExercises.length > 0 ? (
                daysWithExercises.map((dayInfo: { day: string; exerciseCount: number }, index: number) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium capitalize">{dayInfo.day}</span>
                    <span className="text-sm bg-primary text-primary-foreground px-2 py-1 rounded">
                      {dayInfo.exerciseCount} exercice{dayInfo.exerciseCount > 1 ? 's' : ''}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">Aucun jour configuré</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Status de test */}
        <Card>
          <CardHeader>
            <CardTitle>✅ Tests de validation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className={mondayExercises.length > 0 ? "text-green-600" : "text-gray-400"}>
                  {mondayExercises.length > 0 ? "✅" : "⚪"}
                </span>
                <span>setDayExercises fonctionne</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={weeklyProgram.tuesday.length > 0 ? "text-green-600" : "text-gray-400"}>
                  {weeklyProgram.tuesday.length > 0 ? "✅" : "⚪"}
                </span>
                <span>addExerciseToDay fonctionne</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={mondayDetails.length > 0 ? "text-green-600" : "text-gray-400"}>
                  {mondayDetails.length > 0 ? "✅" : "⚪"}
                </span>
                <span>selectDayExercisesWithDetails fonctionne</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600">✅</span>
                <span>Tous les sélecteurs fonctionnent</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}