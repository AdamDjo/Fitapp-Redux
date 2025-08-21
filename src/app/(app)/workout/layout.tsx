import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workouts - Fitness Tracker",
  description: "Gérez vos séances d'entraînement",
};

export default function WorkoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}