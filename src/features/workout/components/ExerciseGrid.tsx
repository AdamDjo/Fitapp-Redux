'use client'

import { Exercise } from '../types'
import { ExerciseCard } from './ExerciseCard'
import { cn } from '@/shared/utils'

interface ExerciseGridProps {
  exercises: Exercise[]
  selectedExerciseIds?: string[]
  onExerciseToggle?: (exerciseId: string) => void
  className?: string
  emptyStateMessage?: string
}

export function ExerciseGrid({
  exercises,
  selectedExerciseIds = [],
  onExerciseToggle,
  className,
  emptyStateMessage = "Aucun exercice trouvé."
}: ExerciseGridProps) {
  if (exercises.length === 0) {
    return (
      <div className={cn("flex items-center justify-center py-12", className)}>
        <div className="text-center text-muted-foreground">
          <p className="text-lg mb-2">🏋️‍♂️</p>
          <p>{emptyStateMessage}</p>
        </div>
      </div>
    )
  }

  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",
        className
      )}
      role="grid"
      aria-label="Grille d'exercices"
    >
      {exercises.map((exercise) => (
        <div key={exercise.id} role="gridcell">
          <ExerciseCard
            exercise={exercise}
            isSelected={selectedExerciseIds.includes(exercise.id)}
            onToggle={onExerciseToggle}
          />
        </div>
      ))}
    </div>
  )
}