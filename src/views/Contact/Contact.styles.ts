import clsx from 'clsx'
import { commonStyles } from '@/styles'

const styles = {
  ...commonStyles,
  contact: clsx('flex'),
  column: clsx(
    'm-[0.8rem_1.2rem] rounded-md bg-lightgrey-2 p-[1.6rem_3rem] text-left text-[1.6rem] text-black',
    'first:flex first:basis-[30%] first:flex-col first:justify-evenly',
    'last:basis-[70%] [&>h3]:text-4xl [&>h3]:font-semibold [&>p]:first:mt-8'
  ),
}

export default styles
