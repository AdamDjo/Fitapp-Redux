'use client'
import { DEFAULT_THEME_CONFIG } from '@/shared/constants'
import { ThemeConfig } from '@/shared/types'
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'

// Définition des actions possibles pour le reducer
type ThemeAction =
  | { type: 'SET_THEME'; payload: ThemeConfig['theme'] }
  | { type: 'SET_COLORS'; payload: Partial<Pick<ThemeConfig, 'primaryColor' | 'accentColor'>> }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_COMPACT_MODE'; payload: boolean }
  | { type: 'TOGGLE_DARK_MODE' } // si tu veux garder la précédente action

// Contexte avec typage correct
const ThemeContext = createContext<{
  state: ThemeConfig
  dispatch: React.Dispatch<ThemeAction>
}>({
  state: DEFAULT_THEME_CONFIG,
  dispatch: () => null
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer((state: ThemeConfig, action: ThemeAction): ThemeConfig => {
    switch (action.type) {
      case 'SET_THEME':
        return { ...state, theme: action.payload }
      case 'SET_COLORS':
        return { ...state, ...action.payload }
      case 'TOGGLE_SIDEBAR':
        return { ...state, sidebarCollapsed: !state.sidebarCollapsed }
      case 'SET_COMPACT_MODE':
        return { ...state, compactMode: action.payload }
      default:
        return state
    }
  }, DEFAULT_THEME_CONFIG)

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--primary-color', state.primaryColor)
    root.style.setProperty('--accent-color', state.accentColor)
    root.className = `theme-${state.theme} ${state.compactMode ? 'compact' : ''}`
  }, [state])

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}