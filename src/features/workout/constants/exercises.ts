import { Exercise } from '../types'

// Constantes pour les groupes musculaires
export const MUSCLE_GROUPS = {
  PECTORAUX: 'Pectoraux',
  DOS: 'Dos',
  JAMBES: 'Jambes',
  EPAULES: 'Épaules',
  BICEPS: 'Biceps',
  TRICEPS: 'Triceps',
  ABDOMINAUX: 'Abdominaux',
} as const

// Constantes pour les catégories
export const EXERCISE_CATEGORIES = {
  POUSSEE: 'Poussée',
  TIRAGE: 'Tirage',
  JAMBES: 'Jambes',
  ISOLATION: 'Isolation',
  CARDIO: 'Cardio',
} as const

export const STATIC_EXERCISES: Exercise[] = [
  // Pectoraux
  {
    id: '1',
    name: 'Développé couché',
    muscleGroup: MUSCLE_GROUPS.PECTORAUX,
    category: EXERCISE_CATEGORIES.POUSSEE,
    image: '🏋️',
    equipment: 'Barre olympique',
    instructions: 'Allongé sur le banc, saisissez la barre avec une prise légèrement plus large que les épaules. Descendez la barre jusqu\'à la poitrine puis poussez vers le haut.'
  },
  {
    id: '2',
    name: 'Développé incliné',
    muscleGroup: MUSCLE_GROUPS.PECTORAUX,
    category: EXERCISE_CATEGORIES.POUSSEE,
    image: '🏋️',
    equipment: 'Banc incliné + Barre',
    instructions: 'Sur banc incliné à 30-45°, même mouvement que le développé couché mais cible le haut des pectoraux.'
  },
  {
    id: '3',
    name: 'Dips',
    muscleGroup: MUSCLE_GROUPS.PECTORAUX,
    category: EXERCISE_CATEGORIES.POUSSEE,
    image: '🤸',
    equipment: 'Barres parallèles',
    instructions: 'Suspendez-vous aux barres parallèles, descendez en fléchissant les bras puis remontez en poussant.'
  },
  {
    id: '4',
    name: 'Pompes',
    muscleGroup: MUSCLE_GROUPS.PECTORAUX,
    category: EXERCISE_CATEGORIES.POUSSEE,
    image: '🤲',
    equipment: 'Poids du corps',
    instructions: 'Position de planche, mains écartées largeur d\'épaules, descendez en fléchissant les bras puis poussez vers le haut.'
  },
  
  // Dos
  {
    id: '5',
    name: 'Tractions',
    muscleGroup: MUSCLE_GROUPS.DOS,
    category: EXERCISE_CATEGORIES.TIRAGE,
    image: '🎯',
    equipment: 'Barre de traction',
    instructions: 'Suspendez-vous à la barre, tirez votre corps vers le haut jusqu\'à ce que votre menton dépasse la barre.'
  },
  {
    id: '6',
    name: 'Rowing barre',
    muscleGroup: MUSCLE_GROUPS.DOS,
    category: EXERCISE_CATEGORIES.TIRAGE,
    image: '🚣',
    equipment: 'Barre olympique',
    instructions: 'Penché en avant, tirez la barre vers votre abdomen en serrant les omoplates.'
  },
  {
    id: '7',
    name: 'Rowing haltères',
    muscleGroup: MUSCLE_GROUPS.DOS,
    category: EXERCISE_CATEGORIES.TIRAGE,
    image: '💪',
    equipment: 'Haltères',
    instructions: 'Un genou sur le banc, tirez l\'haltère vers votre hanche en gardant le coude près du corps.'
  },
  {
    id: '8',
    name: 'Pull-over',
    muscleGroup: MUSCLE_GROUPS.DOS,
    category: EXERCISE_CATEGORIES.TIRAGE,
    image: '🔄',
    equipment: 'Haltère',
    instructions: 'Allongé perpendiculairement sur le banc, descendez l\'haltère derrière la tête puis remontez.'
  },
  
  // Jambes
  {
    id: '9',
    name: 'Squat',
    muscleGroup: MUSCLE_GROUPS.JAMBES,
    category: EXERCISE_CATEGORIES.JAMBES,
    image: '🦵',
    equipment: 'Barre olympique + Rack',
    instructions: 'Barre sur les épaules, descendez en fléchissant hanches et genoux comme si vous vous assiez, puis remontez.'
  },
  {
    id: '10',
    name: 'Soulevé de terre',
    muscleGroup: MUSCLE_GROUPS.JAMBES,
    category: EXERCISE_CATEGORIES.JAMBES,
    image: '⚡',
    equipment: 'Barre olympique',
    instructions: 'Debout, barre au sol, soulevez en gardant le dos droit et en poussant avec les jambes.'
  },
  {
    id: '11',
    name: 'Presse à cuisses',
    muscleGroup: MUSCLE_GROUPS.JAMBES,
    category: EXERCISE_CATEGORIES.JAMBES,
    image: '🦿',
    equipment: 'Machine presse à cuisses',
    instructions: 'Assis sur la machine, poussez la charge avec vos pieds en fléchissant et étendant les jambes.'
  },
  {
    id: '12',
    name: 'Fentes',
    muscleGroup: MUSCLE_GROUPS.JAMBES,
    category: EXERCISE_CATEGORIES.JAMBES,
    image: '🚶',
    equipment: 'Haltères ou poids du corps',
    instructions: 'Faites un grand pas en avant, descendez en fléchissant les deux genoux puis remontez.'
  },
  
  // Épaules
  {
    id: '13',
    name: 'Développé militaire',
    muscleGroup: MUSCLE_GROUPS.EPAULES,
    category: EXERCISE_CATEGORIES.POUSSEE,
    image: '🏆',
    equipment: 'Barre olympique',
    instructions: 'Debout, poussez la barre depuis les épaules vers le haut au-dessus de la tête.'
  },
  {
    id: '14',
    name: 'Élévations latérales',
    muscleGroup: MUSCLE_GROUPS.EPAULES,
    category: EXERCISE_CATEGORIES.ISOLATION,
    image: '🕊️',
    equipment: 'Haltères',
    instructions: 'Debout, levez les haltères sur les côtés jusqu\'à hauteur d\'épaules.'
  },
  {
    id: '15',
    name: 'Élévations frontales',
    muscleGroup: MUSCLE_GROUPS.EPAULES,
    category: EXERCISE_CATEGORIES.ISOLATION,
    image: '🙋',
    equipment: 'Haltères',
    instructions: 'Debout, levez les haltères devant vous jusqu\'à hauteur d\'épaules.'
  },
  
  // Bras
  {
    id: '16',
    name: 'Curl biceps',
    muscleGroup: MUSCLE_GROUPS.BICEPS,
    category: EXERCISE_CATEGORIES.ISOLATION,
    image: '💪',
    equipment: 'Haltères ou barre',
    instructions: 'Debout, fléchissez les avant-bras pour amener la charge vers les épaules.'
  },
  {
    id: '17',
    name: 'Extensions triceps',
    muscleGroup: MUSCLE_GROUPS.TRICEPS,
    category: EXERCISE_CATEGORIES.ISOLATION,
    image: '🔧',
    equipment: 'Haltère ou câble',
    instructions: 'Bras tendu au-dessus de la tête, fléchissez uniquement l\'avant-bras pour descendre la charge.'
  },
  {
    id: '18',
    name: 'Dips triceps',
    muscleGroup: MUSCLE_GROUPS.TRICEPS,
    category: EXERCISE_CATEGORIES.ISOLATION,
    image: '🪑',
    equipment: 'Chaise ou banc',
    instructions: 'Mains sur le bord d\'une chaise, descendez en fléchissant les bras puis remontez.'
  },
]