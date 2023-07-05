import type { FC, IconName } from '@/types'
import { IconNames } from './Icons'

interface IconProps {
  name: IconName
  className?: string
  onClick?: () => void
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  return (
    <svg role='img' {...props}>
      <use xlinkHref={`#icon-${IconNames[name]}`} />
    </svg>
  )
}

export default Icon
