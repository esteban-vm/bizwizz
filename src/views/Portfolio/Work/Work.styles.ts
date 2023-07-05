import clsx from 'clsx'

const styles = {
  wrapper: clsx('w-full overflow-hidden'),
  image: clsx(
    'h-auto w-full',
    'brightness-100 contrast-100 saturate-0 transition-all duration-500',
    'hover:scale-125 hover:filter-none pointer-coarse:filter-none'
  ),
}

export default styles
