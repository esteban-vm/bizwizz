export type { FC, ReactNode } from 'react'
export type BgColor = 'primary' | 'white' | 'black'
export type { NavLinkProps, SocialLinkProps } from '@/components'
export type IconName = keyof typeof import('@/components').IconNames
export type UUID = ReturnType<typeof import('node:crypto').randomUUID>
export type SectionID = 'contact' | 'portfolio' | 'services' | 'team' | 'testimonials'
export type ImageProps<P extends string> = { src: `/images/${P}.jpg`; height: number; width: number }
