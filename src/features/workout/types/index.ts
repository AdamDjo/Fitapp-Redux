export interface Exercise {
  id: string
  name: string
  muscleGroup: string
  category: string
}

export interface WorkoutSet {
  id: string
  exerciseId: string
  reps: number
  weight: number // en kg
  date: string // ISO format
  createdAt: string
}

export interface WorkoutState {
  exercises: Exercise[]
  sets: WorkoutSet[]
  isSessionActive: boolean
  currentExercise: string | null
  loading: boolean
  error: string | null
}