export type { FC, PropsWithChildren } from 'react'
export type { IconName } from '@/components'
export type ID = `${string}-${string}-${string}-${string}-${string}`
export type ImageData<P extends string> = { src: `/images/${P}.jpg`; height: number; width: number }
