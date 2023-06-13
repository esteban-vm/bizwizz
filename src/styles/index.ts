import clsx from 'clsx'

export const commonStyles = {
  wrapper(bg: 'white' | 'black') {
    return clsx(`section ${bg === 'white' ? 'bg-white' : 'bg-black'}`)
  },

  header: clsx('section_header'),
  heading: clsx('section_heading'),
  subheading: clsx('section_subheading'),
}
