export interface Exercise {
  id: string
  name: string
  muscleGroup: string
  category: string
  image?: string
  instructions?: string
  equipment?: string
}

export interface WorkoutSet {
  id: string
  exerciseId: string
  reps: number
  weight: number // en kg
  date: string // ISO format
  createdAt: string
}

// Types pour les programmes hebdomadaires
export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

export interface WeeklyProgram {
  monday: string[]    // Exercise IDs
  tuesday: string[]
  wednesday: string[]
  thursday: string[]
  friday: string[]
  saturday: string[]
  sunday: string[]
}

export interface DailySession {
  id: string
  date: string // YYYY-MM-DD
  day: DayOfWeek
  exercises: {
    exerciseId: string
    sets: WorkoutSet[]
  }[]
  completed: boolean
  duration?: number // minutes
  createdAt: string
}

export interface WorkoutState {
  exercises: Exercise[]
  sets: WorkoutSet[]
  weeklyProgram: WeeklyProgram
  dailySessions: DailySession[]
  isSessionActive: boolean
  currentExercise: string | null
  loading: boolean
  error: string | null
}