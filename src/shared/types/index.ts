// Types globaux
export type Theme = 'light' | 'dark' | 'auto'

export interface ThemeConfig {
  theme: Theme
  primaryColor: string
  accentColor: string
  sidebarCollapsed: boolean
  compactMode: boolean
}
export interface WorkoutSet {
  id: string
  exercise: string
  reps: number
  weight: number
  date: string
}

export interface WorkoutState {
  sets: WorkoutSet[]
  isSessionActive: boolean
  currentExercise: string | null
}