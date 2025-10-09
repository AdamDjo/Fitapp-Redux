import { Exercise } from '../types'
import { MUSCLE_GROUPS, EXERCISE_CATEGORIES } from '../constants/exercises'

// Types pour les filtres
export interface ExerciseFilters {
  muscleGroup?: string
  category?: string
  search?: string
}

// Fonction pour filtrer les exercices
export function filterExercises(exercises: Exercise[], filters: ExerciseFilters): Exercise[] {
  return exercises.filter(exercise => {
    // Filtre par groupe musculaire
    if (filters.muscleGroup && filters.muscleGroup !== 'all') {
      if (exercise.muscleGroup !== filters.muscleGroup) {
        return false
      }
    }

    // Filtre par catégorie
    if (filters.category && filters.category !== 'all') {
      if (exercise.category !== filters.category) {
        return false
      }
    }

    // Filtre par recherche textuelle
    if (filters.search && filters.search.trim() !== '') {
      const searchTerm = filters.search.toLowerCase().trim()
      const exerciseName = exercise.name.toLowerCase()
      const muscleGroup = exercise.muscleGroup.toLowerCase()
      
      if (!exerciseName.includes(searchTerm) && !muscleGroup.includes(searchTerm)) {
        return false
      }
    }

    return true
  })
}

// Fonction pour obtenir tous les groupes musculaires uniques
export function getUniqueMuscleGroups(exercises: Exercise[]): string[] {
  const uniqueGroups = Array.from(new Set(exercises.map(ex => ex.muscleGroup)))
  return uniqueGroups.sort()
}

// Fonction pour obtenir toutes les catégories uniques  
export function getUniqueCategories(exercises: Exercise[]): string[] {
  const uniqueCategories = Array.from(new Set(exercises.map(ex => ex.category)))
  return uniqueCategories.sort()
}

// Fonction pour grouper les exercices par groupe musculaire
export function groupExercisesByMuscle(exercises: Exercise[]): Record<string, Exercise[]> {
  return exercises.reduce((groups, exercise) => {
    const muscleGroup = exercise.muscleGroup
    if (!groups[muscleGroup]) {
      groups[muscleGroup] = []
    }
    groups[muscleGroup].push(exercise)
    return groups
  }, {} as Record<string, Exercise[]>)
}

// Fonction pour rechercher des exercices par nom
export function searchExercisesByName(exercises: Exercise[], query: string): Exercise[] {
  if (!query || query.trim() === '') {
    return exercises
  }
  
  const searchTerm = query.toLowerCase().trim()
  return exercises.filter(exercise => 
    exercise.name.toLowerCase().includes(searchTerm)
  )
}

// Fonction pour obtenir des exercices recommandés basés sur le groupe musculaire
export function getRecommendedExercises(exercises: Exercise[], muscleGroup: string, limit: number = 5): Exercise[] {
  const filtered = exercises.filter(ex => ex.muscleGroup === muscleGroup)
  return filtered.slice(0, limit)
}

// Constantes pour les options de filtre
export const FILTER_OPTIONS = {
  MUSCLE_GROUPS: Object.values(MUSCLE_GROUPS),
  CATEGORIES: Object.values(EXERCISE_CATEGORIES),
  ALL: 'all'
} as const