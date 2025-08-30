'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/organisms"
import { Button, Typography } from "@/shared/ui/atoms"
import { TrendingUp, Dumbbell, Target, Activity } from "lucide-react"

export default function HomePage() {
  const stats = [
    {
      title: "Workouts cette semaine",
      value: "4",
      description: "+2 par rapport à la semaine dernière",
      icon: Dumbbell,
      trend: "up"
    },
    {
      title: "Calories brûlées",
      value: "2,430",
      description: "+180 calories aujourd'hui",
      icon: Activity,
      trend: "up"
    },
    {
      title: "Objectifs atteints",
      value: "8/10",
      description: "2 objectifs restants",
      icon: Target,
      trend: "neutral"
    },
    {
      title: "Progression globale",
      value: "85%",
      description: "+12% ce mois-ci",
      icon: TrendingUp,
      trend: "up"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="space-y-4">
        <Typography variant="h1" className="text-3xl font-bold tracking-tight">
          Tableau de bord
        </Typography>
        <Typography variant="lead" className="text-muted-foreground max-w-2xl">
          Bienvenue dans votre application de fitness ! Voici un aperçu de vos progrès récents et de vos statistiques.
        </Typography>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 px-0">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent className="px-0 pb-0">
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">Actions rapides</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Typography variant="muted" className="text-base">
            Commencez votre journée de fitness avec ces actions rapides.
          </Typography>
          <div className="flex flex-wrap gap-4">
            <Button size="lg">
              <Dumbbell className="mr-2 h-5 w-5" />
              Nouveau Workout
            </Button>
            <Button variant="outline" size="lg">
              <Target className="mr-2 h-5 w-5" />
              Définir Objectif
            </Button>
            <Button variant="outline" size="lg">
              <TrendingUp className="mr-2 h-5 w-5" />
              Voir Progrès
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader className="pb-4">
          <CardTitle className="text-xl">Activité récente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-between rounded-lg bg-muted/20 p-4">
              <div className="min-w-0 flex-1">
                <Typography variant="small" className="font-medium">
                  Workout terminé : Push Day
                </Typography>
                <Typography variant="muted" className="text-sm mt-1">
                  Il y a 2 heures - 45 minutes
                </Typography>
              </div>
              <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                +250 cal
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-muted/20 p-4">
              <div className="min-w-0 flex-1">
                <Typography variant="small" className="font-medium">
                  Objectif atteint : 10k pas
                </Typography>
                <Typography variant="muted" className="text-sm mt-1">
                  Hier - Marche quotidienne
                </Typography>
              </div>
              <div className="text-sm font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                ✓ Terminé
              </div>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-muted/20 p-4">
              <div className="min-w-0 flex-1">
                <Typography variant="small" className="font-medium">
                  Nouveau PR : Bench Press
                </Typography>
                <Typography variant="muted" className="text-sm mt-1">
                  Il y a 3 jours - 80kg
                </Typography>
              </div>
              <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                🎉 Record
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
