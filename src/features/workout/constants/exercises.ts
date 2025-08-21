import { Exercise } from '../types'

export const STATIC_EXERCISES: Exercise[] = [
  // Pectoraux
  { id: '1', name: 'Développé couché', muscleGroup: 'Pectoraux', category: 'Poussée' },
  { id: '2', name: 'Développé incliné', muscleGroup: 'Pectoraux', category: 'Poussée' },
  { id: '3', name: 'Dips', muscleGroup: 'Pectoraux', category: 'Poussée' },
  { id: '4', name: 'Pompes', muscleGroup: 'Pectoraux', category: 'Poussée' },
  
  // Dos
  { id: '5', name: 'Tractions', muscleGroup: 'Dos', category: 'Tirage' },
  { id: '6', name: 'Rowing barre', muscleGroup: 'Dos', category: 'Tirage' },
  { id: '7', name: 'Rowing haltères', muscleGroup: 'Dos', category: 'Tirage' },
  { id: '8', name: 'Pull-over', muscleGroup: 'Dos', category: 'Tirage' },
  
  // Jambes
  { id: '9', name: 'Squat', muscleGroup: 'Jambes', category: 'Jambes' },
  { id: '10', name: 'Soulevé de terre', muscleGroup: 'Jambes', category: 'Jambes' },
  { id: '11', name: 'Presse à cuisses', muscleGroup: 'Jambes', category: 'Jambes' },
  { id: '12', name: 'Fentes', muscleGroup: 'Jambes', category: 'Jambes' },
  
  // Épaules
  { id: '13', name: 'Développé militaire', muscleGroup: 'Épaules', category: 'Poussée' },
  { id: '14', name: 'Élévations latérales', muscleGroup: 'Épaules', category: 'Isolation' },
  { id: '15', name: 'Élévations frontales', muscleGroup: 'Épaules', category: 'Isolation' },
  
  // Bras
  { id: '16', name: 'Curl biceps', muscleGroup: 'Biceps', category: 'Isolation' },
  { id: '17', name: 'Extensions triceps', muscleGroup: 'Triceps', category: 'Isolation' },
  { id: '18', name: 'Dips triceps', muscleGroup: 'Triceps', category: 'Isolation' },
]