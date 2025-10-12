'use client'

import { useState } from 'react'
import { ExerciseCard, ExerciseFilter, ExerciseGrid } from '@/features/workout/components'
import { STATIC_EXERCISES } from '@/features/workout/constants/exercises'
import { filterExercises } from '@/features/workout/utils/exerciseFilters'
import { Card, CardHeader, CardTitle, CardContent } from '@/shared/ui/organisms/Card'

export default function TestExercisesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMuscleGroups, setSelectedMuscleGroups] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedExercises, setSelectedExercises] = useState<string[]>([])

  const handleMuscleGroupToggle = (group: string) => {
    setSelectedMuscleGroups(prev =>
      prev.includes(group)
        ? prev.filter(g => g !== group)
        : [...prev, group]
    )
  }

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const handleExerciseToggle = (exerciseId: string) => {
    setSelectedExercises(prev =>
      prev.includes(exerciseId)
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    )
  }

  const handleClearFilters = () => {
    setSearchTerm('')
    setSelectedMuscleGroups([])
    setSelectedCategories([])
  }

  // Filter exercises based on current filters
  const filteredExercises = filterExercises(STATIC_EXERCISES, {
    search: searchTerm,
    muscleGroup: selectedMuscleGroups.length > 0 ? selectedMuscleGroups[0] : undefined,
    category: selectedCategories.length > 0 ? selectedCategories[0] : undefined
  }).filter(exercise => {
    // Additional filtering for multiple muscle groups and categories
    if (selectedMuscleGroups.length > 0 && !selectedMuscleGroups.includes(exercise.muscleGroup)) {
      return false
    }
    if (selectedCategories.length > 0 && !selectedCategories.includes(exercise.category)) {
      return false
    }
    return true
  })

  return (
    <div className="container mx-auto py-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Test - Feature 2: Exercise Cards Component</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Page de test pour valider les composants d'exercices. 
            Exercices sélectionnés: {selectedExercises.length}
          </p>
          
          {selectedExercises.length > 0 && (
            <div className="mb-4 p-3 bg-primary/10 rounded-lg">
              <strong>Exercices sélectionnés:</strong>
              <ul className="mt-2 space-y-1">
                {selectedExercises.map(id => {
                  const exercise = STATIC_EXERCISES.find(ex => ex.id === id)
                  return exercise ? (
                    <li key={id} className="text-sm">
                      {exercise.image} {exercise.name} - {exercise.muscleGroup}
                    </li>
                  ) : null
                })}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Exercise Filter */}
      <ExerciseFilter
        searchTerm={searchTerm}
        selectedMuscleGroups={selectedMuscleGroups}
        selectedCategories={selectedCategories}
        onSearchChange={setSearchTerm}
        onMuscleGroupToggle={handleMuscleGroupToggle}
        onCategoryToggle={handleCategoryToggle}
        onClearFilters={handleClearFilters}
      />

      {/* Exercise Grid */}
      <ExerciseGrid
        exercises={filteredExercises}
        selectedExerciseIds={selectedExercises}
        onExerciseToggle={handleExerciseToggle}
        emptyStateMessage="Aucun exercice ne correspond aux filtres sélectionnés."
      />

      {/* Stats */}
      <Card>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{STATIC_EXERCISES.length}</div>
              <div className="text-sm text-muted-foreground">Total exercices</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{filteredExercises.length}</div>
              <div className="text-sm text-muted-foreground">Filtrés</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{selectedExercises.length}</div>
              <div className="text-sm text-muted-foreground">Sélectionnés</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{selectedMuscleGroups.length + selectedCategories.length}</div>
              <div className="text-sm text-muted-foreground">Filtres actifs</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}