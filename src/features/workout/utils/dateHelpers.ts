import { DayOfWeek } from '../types'

// Mapper les jours de la semaine
export const DAYS_OF_WEEK: DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

export const DAY_NAMES_FR: Record<DayOfWeek, string> = {
  monday: 'Lundi',
  tuesday: 'Mardi', 
  wednesday: 'Mercredi',
  thursday: 'Jeudi',
  friday: 'Vendredi',
  saturday: 'Samedi',
  sunday: 'Dimanche'
}

export const DAY_NAMES_SHORT_FR: Record<DayOfWeek, string> = {
  monday: 'Lun',
  tuesday: 'Mar',
  wednesday: 'Mer', 
  thursday: 'Jeu',
  friday: 'Ven',
  saturday: 'Sam',
  sunday: 'Dim'
}

// Obtenir le jour actuel en format DayOfWeek
export function getCurrentDay(): DayOfWeek {
  const now = new Date()
  const dayIndex = now.getDay()
  
  // JavaScript getDay() retourne 0 pour dimanche, 1 pour lundi, etc.
  // Nous devons convertir cela vers notre format
  const dayMap = [
    'sunday',    // 0
    'monday',    // 1  
    'tuesday',   // 2
    'wednesday', // 3
    'thursday',  // 4
    'friday',    // 5
    'saturday'   // 6
  ] as const
  
  return dayMap[dayIndex]
}

// Obtenir la date au format YYYY-MM-DD
export function getCurrentDateString(): string {
  return new Date().toISOString().split('T')[0]
}

// Obtenir la date pour un jour spécifique de la semaine courante
export function getDateForDayInCurrentWeek(targetDay: DayOfWeek): string {
  const today = new Date()
  const currentDay = getCurrentDay()
  const currentDayIndex = DAYS_OF_WEEK.indexOf(currentDay)
  const targetDayIndex = DAYS_OF_WEEK.indexOf(targetDay)
  
  const daysDifference = targetDayIndex - currentDayIndex
  const targetDate = new Date(today)
  targetDate.setDate(today.getDate() + daysDifference)
  
  return targetDate.toISOString().split('T')[0]
}

// Vérifier si une date est aujourd'hui
export function isToday(dateString: string): boolean {
  return dateString === getCurrentDateString()
}

// Obtenir le nom du jour en français
export function getDayName(day: DayOfWeek, short: boolean = false): string {
  return short ? DAY_NAMES_SHORT_FR[day] : DAY_NAMES_FR[day]
}

// Obtenir le jour suivant dans la semaine
export function getNextDay(currentDay: DayOfWeek): DayOfWeek {
  const currentIndex = DAYS_OF_WEEK.indexOf(currentDay)
  const nextIndex = (currentIndex + 1) % DAYS_OF_WEEK.length
  return DAYS_OF_WEEK[nextIndex]
}

// Obtenir le jour précédent dans la semaine
export function getPreviousDay(currentDay: DayOfWeek): DayOfWeek {
  const currentIndex = DAYS_OF_WEEK.indexOf(currentDay)
  const prevIndex = currentIndex === 0 ? DAYS_OF_WEEK.length - 1 : currentIndex - 1
  return DAYS_OF_WEEK[prevIndex]
}

// Formater une durée en minutes vers une chaîne lisible
export function formatDuration(minutes?: number): string {
  if (!minutes) return '0 min'
  
  if (minutes < 60) {
    return `${minutes} min`
  }
  
  const hours = Math.floor(minutes / 60)
  const remainingMinutes = minutes % 60
  
  if (remainingMinutes === 0) {
    return `${hours}h`
  }
  
  return `${hours}h ${remainingMinutes}min`
}

// Obtenir une date relative (aujourd'hui, hier, etc.)
export function getRelativeDateString(dateString: string): string {
  const today = getCurrentDateString()
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  const yesterdayString = yesterday.toISOString().split('T')[0]
  
  if (dateString === today) {
    return "Aujourd'hui"
  } else if (dateString === yesterdayString) {
    return "Hier"
  } else {
    // Formater la date normalement
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    })
  }
}

// Calculer la différence en jours entre deux dates
export function daysBetween(date1: string, date2: string): number {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  const diffTime = Math.abs(d2.getTime() - d1.getTime())
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}