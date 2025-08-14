'use client'
import { DEFAULT_THEME_CONFIG } from '@/shared/constants'
import { ThemeConfig } from '@/shared/types'
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react'


const ThemeContext = createContext<{
  state: ThemeConfig
  dispatch: React.Dispatch<any>
}>({
  state: DEFAULT_THEME_CONFIG,
  dispatch: () => null
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer((state: ThemeConfig, action: any) => {
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
