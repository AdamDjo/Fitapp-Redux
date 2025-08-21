import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { WorkoutState, WorkoutSet } from '../types'
import { STATIC_EXERCISES } from '../constants/exercises'

const initialState: WorkoutState = {
  exercises: STATIC_EXERCISES,
  sets: [],
  isSessionActive: false,
  currentExercise: null,
  loading: false,
  error: null,
}

const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    startSession: (state) => {
      state.isSessionActive = true
      state.error = null
    },

    endSession: (state) => {
      state.isSessionActive = false
      state.currentExercise = null
    },

    setCurrentExercise: (state, action: PayloadAction<string>) => {
      state.currentExercise = action.payload
    },

    addSet: (state, action: PayloadAction<{
      exerciseId: string
      reps: number
      weight: number
    }>) => {
      const { exerciseId, reps, weight } = action.payload
      const now = new Date().toISOString()
      
      const newSet: WorkoutSet = {
        id: uuidv4(),
        exerciseId,
        reps,
        weight,
        date: now.split('T')[0],
        createdAt: now,
      }
      
      state.sets.push(newSet)
    },

    removeSet: (state, action: PayloadAction<string>) => {
      state.sets = state.sets.filter(set => set.id !== action.payload)
    },

    updateSet: (state, action: PayloadAction<{
      id: string
      updates: Partial<Pick<WorkoutSet, 'reps' | 'weight'>>
    }>) => {
      const { id, updates } = action.payload
      const setIndex = state.sets.findIndex(set => set.id === id)
      
      if (setIndex !== -1) {
        state.sets[setIndex] = { ...state.sets[setIndex], ...updates }
      }
    },

    clearSets: (state) => {
      state.sets = []
    },

    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.loading = false
    },

    clearError: (state) => {
      state.error = null
    },
  },
})

export const {
  startSession,
  endSession,
  setCurrentExercise,
  addSet,
  removeSet,
  updateSet,
  clearSets,
  setError,
  clearError,
} = workoutSlice.actions

export default workoutSlice.reducer

export const selectExercises = (state: { workout: WorkoutState }) => state.workout.exercises
export const selectSets = (state: { workout: WorkoutState }) => state.workout.sets
export const selectIsSessionActive = (state: { workout: WorkoutState }) => state.workout.isSessionActive
export const selectCurrentExercise = (state: { workout: WorkoutState }) => state.workout.currentExercise
export const selectSetsByExercise = (exerciseId: string) => 
  (state: { workout: WorkoutState }) => 
    state.workout.sets.filter(set => set.exerciseId === exerciseId)