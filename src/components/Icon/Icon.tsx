import type { FC } from '@/types'
import type { icons } from './Icons'

export type IconName = (typeof icons)[number]

interface IconProps {
  name: IconName
  className?: string
  onClick?: () => void
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  return (
    <svg role='img' {...props}>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  )
}

export default Icon
