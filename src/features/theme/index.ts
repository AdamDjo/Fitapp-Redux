// Theme feature barrel export
export { ThemeProvider, useTheme } from './context/ThemeContext'
export { ThemeControls } from './components/ThemeControls'
export { ColorPicker } from './components/ColorPicker'
export { LayoutControls } from './components/LayoutControls'
export { ThemeToggle } from './components/ThemeToggle'
export { ThemePreview } from './components/ThemePreview'

// Re-export types and constants for convenience
export type { ThemeConfig, Theme } from '@/shared/types'
export { THEME_COLORS, DEFAULT_THEME_CONFIG } from '@/shared/constants'