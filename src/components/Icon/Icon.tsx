import type { FC } from '@/types'
import type { icons } from './Icons'

export type IconName = (typeof icons)[number]

interface IconProps {
  name: IconName
  className?: string
  onClick?: () => void
}

const Icon: FC<IconProps> = ({ className, name, onClick }) => {
  return (
    <svg className={className} onClick={onClick} role='img'>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  )
}

export default Icon
