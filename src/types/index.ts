export type { FC, ReactNode } from 'react'
export type BgColor = 'primary' | 'white' | 'black'
export type IconName = typeof import('@/components').icons[number]
export type UUID = ReturnType<typeof import('node:crypto').randomUUID>
export type SectionID = 'contact' | 'portfolio' | 'services' | 'team' | 'testimonials'
export type ImageProps<P extends string> = { src: `/images/${P}.jpg`; height: number; width: number }
