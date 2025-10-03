import { ReactNode } from 'react'

export type SocialMedia = {
  title: 'Facebook' | 'Instagram' | 'Google' | 'LinkedIn'
  href: string
  icon: React.ElementType
}
