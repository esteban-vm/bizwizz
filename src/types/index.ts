export type { FC, ReactNode } from 'react'
export type { SectionID } from '@/components'
export type IconName = typeof import('@/components').icons[number]
export type UUID = ReturnType<typeof import('node:crypto').randomUUID>
export type ImageProps<P extends string> = { src: `/images/${P}.jpg`; height: number; width: number }
