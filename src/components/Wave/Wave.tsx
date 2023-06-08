import type { FC } from '@/types'

type WaveProps = {
  is: 'primary' | 'white' | 'black'
}

const Wave: FC<WaveProps> = ({ is }) => {
  const isBlack = is === 'black'
  const isWhite = is === 'white'

  return (
    <svg
      role='presentation'
      viewBox='0 0 500 150'
      preserveAspectRatio='none'
      className={`${isBlack ? 'text-black' : isWhite ? 'text-white' : 'text-primary'} h-40 w-full`}
    >
      <path
        d='M0.00,49.98 C161.96,151.48 356.65,-54.75 500.00,49.98 L504.51,-36.00 L-13.54,-3.44 Z'
        stroke='none'
        fill='currentColor'
      />
    </svg>
  )
}

export default Wave
