import type { BgColor } from '@/types'
import clsx from 'clsx'

const styles = {
  wrapper(bg: Exclude<BgColor, 'primary'>) {
    return clsx('pb-32 text-center', bg === 'white' ? 'bg-white' : 'bg-black')
  },
  header: clsx('font-bold tracking-widest'),
  title: clsx('mb-5 text-[2.4rem] uppercase text-primary'),
  subtitle: clsx('mb-10 text-[4rem] capitalize text-darkgrey'),
}

export default styles
