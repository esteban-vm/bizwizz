export type { FC, PropsWithChildren } from 'react'
export type { IconName } from '@/components'
export type ID = ReturnType<typeof import('node:crypto').randomUUID>
export type ImageData<P extends string> = { src: `/images/${P}.jpg`; height: number; width: number }
