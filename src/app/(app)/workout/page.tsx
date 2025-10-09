'use client'
import { selectExercises, MUSCLE_GROUPS, Exercise } from "@/features/workout";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/organisms";
import { Badge } from "@/shared/ui/atoms";
import { useAppSelector } from "@/store";

export default function WorkoutPage() {
  const exercises = useAppSelector(selectExercises)
  
  // Grouper les exercices par muscle group
  const exercisesByMuscle = exercises.reduce((groups: Record<string, Exercise[]>, exercise: Exercise) => {
    const muscleGroup = exercise.muscleGroup;
    if (!groups[muscleGroup]) {
      groups[muscleGroup] = [];
    }
    groups[muscleGroup].push(exercise);
    return groups;
  }, {} as Record<string, Exercise[]>);

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold">💪 Mes Workouts</h1>
        <p className="text-muted-foreground mt-2">
          Bienvenue sur votre page d'entraînement ! Gérez vos programmes et suivez vos progrès.
        </p>
      </div>


      {/* Exercise Library Preview - Test de Feature 1 */}
      <Card>
        <CardHeader>
          <CardTitle>📚 Bibliothèque d'exercices ({exercises.length} exercices)</CardTitle>
          <p className="text-sm text-muted-foreground">
            Aperçu de vos exercices disponibles avec les nouvelles données enrichies
          </p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(exercisesByMuscle).map(([muscleGroup, muscleExercises]) => (
              <div key={muscleGroup}>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Badge variant="secondary">{muscleGroup}</Badge>
                  <span className="text-sm text-muted-foreground">
                    {muscleExercises.length} exercice{muscleExercises.length > 1 ? 's' : ''}
                  </span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {muscleExercises.slice(0, 6).map((exercise) => (
                    <div
                      key={exercise.id}
                      className="flex items-center gap-3 p-3 rounded-lg border bg-card hover:bg-accent transition-colors"
                    >
                      <div className="text-2xl">
                        {exercise.image || '💪'}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{exercise.name}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {exercise.category}
                          {exercise.equipment && ` • ${exercise.equipment}`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Features à venir */}
      <Card>
        <CardHeader>
          <CardTitle>🚀 Fonctionnalités en développement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-green-600 border-green-600">✅ Feature 1</Badge>
                <span className="text-sm">Système d'exercices amélioré</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">🔄 Feature 2</Badge>
                <span className="text-sm">Cartes d'exercices visuelles</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">⏳ Feature 3</Badge>
                <span className="text-sm">Programmes hebdomadaires</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">⏳ Feature 4</Badge>
                <span className="text-sm">Constructeur de programmes</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Badge variant="outline">⏳ Feature 5</Badge>
                <span className="text-sm">Vue workout quotidien</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">⏳ Feature 6</Badge>
                <span className="text-sm">Suivi des séries</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">⏳ Feature 7</Badge>
                <span className="text-sm">Historique des workouts</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">⏳ Feature 8</Badge>
                <span className="text-sm">Navigation par jour</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}