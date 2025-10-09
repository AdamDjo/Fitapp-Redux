import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WorkoutState } from '../types'
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
  },
})

export const {
  setError,
  clearError,
  setLoading,
} = workoutSlice.actions

export default workoutSlice.reducer

// Sélecteurs essentiels - seulement ce qui est utilisé
export const selectExercises = (state: { workout: WorkoutState }) => state.workout.exercises
export const selectLoading = (state: { workout: WorkoutState }) => state.workout.loading
export const selectError = (state: { workout: WorkoutState }) => state.workout.error