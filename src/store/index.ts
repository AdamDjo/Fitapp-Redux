import { workoutSlice } from '@/features/workout'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    workout: workoutSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignorer ces action types dans les vérifications de sérialisabilité
        ignoredActions: ['persist/PERSIST'],
      },
    }),
})

// Types TypeScript pour le store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Hooks typés pour useSelector et useDispatch
export { useDispatch, useSelector } from 'react-redux'

// Hooks typés personnalisés pour TypeScript
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux'
export const useAppDispatch = () => useReduxDispatch<AppDispatch>()
export const useAppSelector = <TSelected>(selector: (state: RootState) => TSelected) =>
  useReduxSelector(selector)