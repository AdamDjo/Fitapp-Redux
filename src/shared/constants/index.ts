//   # Constantes

import { ThemeConfig } from "../types"


export const THEME_COLORS = {
  blue: '#3B82F6',
  green: '#10B981', 
  purple: '#8B5CF6',
  orange: '#F59E0B',
  red: '#EF4444',
  indigo: '#6366F1',
  pink: '#EC4899'
} as const

export const DEFAULT_THEME_CONFIG: ThemeConfig = {
  theme: 'light',
  primaryColor: THEME_COLORS.blue,
  accentColor: THEME_COLORS.green,
  sidebarCollapsed: false,
  compactMode: false
}