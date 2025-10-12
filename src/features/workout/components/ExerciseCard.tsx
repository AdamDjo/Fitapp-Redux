'use client'

import { Exercise } from '../types'
import { Button } from '@/shared/ui/atoms/button'
import { Card, CardHeader, CardTitle, CardDescription, CardAction } from '@/shared/ui/organisms/Card'
import { cn } from '@/shared/utils'

interface ExerciseCardProps {
  exercise: Exercise
  isSelected?: boolean
  onToggle?: (exerciseId: string) => void
  className?: string
}

export function ExerciseCard({
  exercise,
  isSelected = false,
  onToggle,
  className
}: ExerciseCardProps) {
  const handleClick = () => {
    onToggle?.(exercise.id)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary py-3 gap-3",
        isSelected
          ? "border-primary bg-primary/5 ring-2 ring-primary/20"
          : "hover:border-primary/50",
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={isSelected}
      aria-label={`${isSelected ? 'Deselect' : 'Select'} exercise ${exercise.name}`}
    >
      <CardHeader className="px-4 gap-2">
        <div className="flex items-start gap-3">
          {exercise.image && (
            <div className="text-2xl flex-shrink-0" aria-hidden="true">
              {exercise.image}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <CardTitle className="text-sm leading-tight">
              {exercise.name}
            </CardTitle>
            <CardDescription className="text-xs capitalize">
              {exercise.muscleGroup}
            </CardDescription>
            {exercise.equipment && (
              <CardDescription className="text-xs mt-1">
                {exercise.equipment}
              </CardDescription>
            )}
            {exercise.category && (
              <CardDescription className="text-xs opacity-80 capitalize">
                {exercise.category}
              </CardDescription>
            )}
          </div>
        </div>
        <CardAction>
          <Button
            size="sm"
            variant={isSelected ? "default" : "outline"}
            className="h-7 w-7 p-0"
            onClick={(e) => {
              e.stopPropagation()
              handleClick()
            }}
            aria-hidden="true"
            tabIndex={-1}
          >
            {isSelected ? '✓' : '+'}
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  )
}