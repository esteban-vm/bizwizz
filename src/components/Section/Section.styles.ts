import clsx from 'clsx'

const styles = {
  wrapper(bg: 'white' | 'black') {
    return clsx('pb-32 text-center', bg === 'white' ? 'bg-white' : 'bg-black')
  },

  header: clsx('font-bold tracking-widest'),
  heading: clsx('mb-5 text-[2.4rem] uppercase text-primary'),
  subheading: clsx('mb-10 text-[4rem] capitalize text-darkgrey'),
}

export default styles
