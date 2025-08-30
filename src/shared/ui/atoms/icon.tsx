import React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/shared/utils'

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  icon: LucideIcon
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  variant?: 'default' | 'muted' | 'accent' | 'destructive'
}

const iconSizes = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
  '2xl': 'h-10 w-10'
}

const iconVariants = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  accent: 'text-primary',
  destructive: 'text-destructive'
}

export function Icon({ 
  icon: IconComponent, 
  size = 'md', 
  variant = 'default',
  className,
  ...props 
}: IconProps) {
  return (
    <IconComponent
      className={cn(
        iconSizes[size],
        iconVariants[variant],
        className
      )}
      {...props}
    />
  )
}