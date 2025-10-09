import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WorkoutState, DayOfWeek } from '../types'
import { STATIC_EXERCISES } from '../constants/exercises'

// État initial simplifié - seulement ce qui est nécessaire maintenant
const initialState: WorkoutState = {
  exercises: STATIC_EXERCISES,
  sets: [],
  weeklyProgram: {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: [],
  },
  dailySessions: [],
  isSessionActive: false,
  currentExercise: null,
  loading: false,
  error: null,
}

const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    // Actions essentielles pour l'état de chargement et erreurs
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.loading = false
    },

    clearError: (state) => {
      state.error = null
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setDayExercises: (state, action: PayloadAction<{ day: DayOfWeek; exerciseIds: string[] }>) => {
      const { day, exerciseIds } = action.payload
      state.weeklyProgram[day] = exerciseIds
    },

    addExerciseToDay: (state, action: PayloadAction<{ day: DayOfWeek; exerciseId: string }>) => {
      const { day, exerciseId } = action.payload
      if (!state.weeklyProgram[day].includes(exerciseId)) {
        state.weeklyProgram[day].push(exerciseId)
      }
    },

    removeExerciseFromDay: (state, action: PayloadAction<{ day: DayOfWeek; exerciseId: string }>) => {
      const { day, exerciseId } = action.payload
      state.weeklyProgram[day] = state.weeklyProgram[day].filter(id => id !== exerciseId)
    },

    clearDayExercises: (state, action: PayloadAction<DayOfWeek>) => {
      const day = action.payload
      state.weeklyProgram[day] = []
    },

    resetWeeklyProgram: (state) => {
      state.weeklyProgram = {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: [],
      }
    },
  },
})

export const {
  setError,
  clearError,
  setLoading,
  setDayExercises,
  addExerciseToDay,
  removeExerciseFromDay,
  clearDayExercises,
  resetWeeklyProgram,
} = workoutSlice.actions

export default workoutSlice.reducer

// Sélecteurs essentiels
export const selectExercises = (state: { workout: WorkoutState }) => state.workout.exercises
export const selectLoading = (state: { workout: WorkoutState }) => state.workout.loading
export const selectError = (state: { workout: WorkoutState }) => state.workout.error

// Sélecteurs pour les programmes hebdomadaires
export const selectWeeklyProgram = (state: { workout: WorkoutState }) => state.workout.weeklyProgram

export const selectDayExercises = (day: DayOfWeek) =>
  (state: { workout: WorkoutState }) => state.workout.weeklyProgram[day]

export const selectDayExercisesWithDetails = (day: DayOfWeek) =>
  (state: { workout: WorkoutState }) => {
    const exerciseIds = state.workout.weeklyProgram[day]
    return exerciseIds.map(id =>
      state.workout.exercises.find(exercise => exercise.id === id)
    ).filter(Boolean)
  }

export const selectAllDaysWithExercises = (state: { workout: WorkoutState }) => {
  const program = state.workout.weeklyProgram
  return Object.entries(program)
    .filter(([_, exerciseIds]) => exerciseIds.length > 0)
    .map(([day, exerciseIds]) => ({ day: day as DayOfWeek, exerciseCount: exerciseIds.length }))
}