import type { FC } from 'react'

type WaveProps = { isPrimary?: boolean }

const Wave: FC<WaveProps> = ({ isPrimary }) => {
  return (
    <svg
      role='presentation'
      viewBox='0 0 500 150'
      preserveAspectRatio='none'
      height='10rem'
      width='100%'
      className={isPrimary ? 'text-primary' : 'text-black'}
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
