export { default as workoutSlice } from './store/workoutSlice'
export {
  // Actions essentielles
  setError,
  clearError,
  setLoading,
  // Actions pour les programmes hebdomadaires
  setDayExercises,
  addExerciseToDay,
  removeExerciseFromDay,
  clearDayExercises,
  resetWeeklyProgram,
  // Sélecteurs essentiels
  selectExercises,
  selectLoading,
  selectError,
  // Sélecteurs pour les programmes hebdomadaires
  selectWeeklyProgram,
  selectDayExercises,
  selectDayExercisesWithDetails,
  selectAllDaysWithExercises,
} from './store/workoutSlice'

export type { Exercise, WorkoutSet, WorkoutState, WeeklyProgram, DailySession, DayOfWeek } from './types'

export * from './components'
export * from './constants/exercises'
export * from './utils'