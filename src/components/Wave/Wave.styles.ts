import clsx from 'clsx'

const styles = (isBlack: boolean, isWhite: boolean) => {
  return clsx('h-40 w-full', isBlack ? 'text-black' : isWhite ? 'text-white' : 'text-primary')
}

export default styles
