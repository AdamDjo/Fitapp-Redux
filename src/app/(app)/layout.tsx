'use client'
import { useTheme } from "@/features/theme";
import { AppHeader, AppSidebar } from "@/shared/components/layout";
import { usePathname } from 'next/navigation';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { state } = useTheme();
  const pathname = usePathname();

  const navItems = [
    { icon: '🏠', label: 'Dashboard', active: pathname === '/', href: '/' },
    { icon: '🎨', label: 'Thème', active: pathname === '/', href: '/' },
    { icon: '💪', label: 'Workouts', active: pathname.startsWith('/workout'), href: '/workout' },
    { icon: '📊', label: 'Progression', active: pathname.startsWith('/progression'), href: '/progression' },
  ];

  return (
    <div className={`app theme-${state.theme} ${state.compactMode ? 'compact' : ''}`}>
      <AppHeader
        title="💪 Fitness Tracker"
        statusMessage="Application Fitness"
      />
      
      <div className="flex">
        <AppSidebar navItems={navItems} />
        
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
}