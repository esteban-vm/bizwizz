import type { FC, BgColor } from '@/types'
import styles from './Wave.styles'

interface WaveProps {
  color: BgColor
}

const Wave: FC<WaveProps> = ({ color }) => {
  return (
    <svg className={styles(color)} preserveAspectRatio='none' role='presentation' viewBox='0 0 500 150' aria-hidden>
      <path
        d='M0.00,49.98 C161.96,151.48 356.65,-54.75 500.00,49.98 L504.51,-36.00 L-13.54,-3.44 Z'
        fill='currentColor'
        stroke='none'
      />
    </svg>
  )
}

export default Wave
