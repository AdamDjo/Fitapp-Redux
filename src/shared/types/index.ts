export type Theme = 'light' | 'dark' | 'auto'

export interface ThemeConfig {
  theme: Theme
  primaryColor: string
  accentColor: string
  sidebarCollapsed: boolean
  compactMode: boolean
}