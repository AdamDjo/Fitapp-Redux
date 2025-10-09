export { default as workoutSlice } from './store/workoutSlice'
export {
  // Actions essentielles
  setError,
  clearError,
  setLoading,
  // Sélecteurs essentiels
  selectExercises,
  selectLoading,
  selectError,
} from './store/workoutSlice'

export type { Exercise, WorkoutSet, WorkoutState, WeeklyProgram, DailySession, DayOfWeek } from './types'

// export * from './components'
export * from './constants/exercises'
export * from './utils'