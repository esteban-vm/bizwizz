import type { BgColor } from '@/types'
import clsx from 'clsx'

const styles = (color: BgColor) => {
  return clsx('h-40 w-full', color === 'black' ? 'text-black' : color === 'white' ? 'text-white' : 'text-primary')
}

export default styles
