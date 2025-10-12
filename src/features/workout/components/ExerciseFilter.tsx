'use client'

import { useState } from 'react'
import { Input } from '@/shared/ui/atoms/input'
import { Button } from '@/shared/ui/atoms/button'
import { Badge } from '@/shared/ui/atoms/badge'
import { Card, CardHeader, CardContent } from '@/shared/ui/organisms/Card'
import { getUniqueMuscleGroups, getUniqueCategories } from '../utils/exerciseFilters'
import { STATIC_EXERCISES } from '../constants/exercises'
import { cn } from '@/shared/utils'

interface ExerciseFilterProps {
  searchTerm: string
  selectedMuscleGroups: string[]
  selectedCategories: string[]
  onSearchChange: (term: string) => void
  onMuscleGroupToggle: (group: string) => void
  onCategoryToggle: (category: string) => void
  onClearFilters: () => void
  className?: string
}

export function ExerciseFilter({
  searchTerm,
  selectedMuscleGroups,
  selectedCategories,
  onSearchChange,
  onMuscleGroupToggle,
  onCategoryToggle,
  onClearFilters,
  className
}: ExerciseFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const uniqueMuscleGroups = getUniqueMuscleGroups(STATIC_EXERCISES)
  const uniqueCategories = getUniqueCategories(STATIC_EXERCISES)
  
  const hasActiveFilters = selectedMuscleGroups.length > 0 || selectedCategories.length > 0 || searchTerm.length > 0

  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Rechercher un exercice..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="flex-1"
            aria-label="Recherche d'exercices"
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls="filter-options"
          >
            Filtres {hasActiveFilters && `(${selectedMuscleGroups.length + selectedCategories.length})`}
          </Button>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClearFilters}
              aria-label="Effacer tous les filtres"
            >
              Effacer
            </Button>
          )}
        </div>
      </CardHeader>
      
      {isExpanded && (
        <CardContent id="filter-options" className="pt-0">
          <div className="space-y-4">
            {/* Muscle Groups Filter */}
            <div>
              <h4 className="text-sm font-medium mb-2">Groupes musculaires</h4>
              <div className="flex flex-wrap gap-2">
                {uniqueMuscleGroups.map((group: string) => (
                  <Badge
                    key={group}
                    variant={selectedMuscleGroups.includes(group) ? "default" : "outline"}
                    className="cursor-pointer capitalize"
                    onClick={() => onMuscleGroupToggle(group)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        onMuscleGroupToggle(group)
                      }
                    }}
                    aria-pressed={selectedMuscleGroups.includes(group)}
                  >
                    {group}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Categories Filter */}
            <div>
              <h4 className="text-sm font-medium mb-2">Catégories</h4>
              <div className="flex flex-wrap gap-2">
                {uniqueCategories.map((category: string) => (
                  <Badge
                    key={category}
                    variant={selectedCategories.includes(category) ? "default" : "outline"}
                    className="cursor-pointer capitalize"
                    onClick={() => onCategoryToggle(category)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        onCategoryToggle(category)
                      }
                    }}
                    aria-pressed={selectedCategories.includes(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  )
}