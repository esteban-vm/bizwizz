import type { FC } from '@/types'

export type IconName =
  | 'facebook'
  | 'linkedin'
  | 'twitter'
  | 'chevron-left'
  | 'chevron-right'
  | 'moon'
  | 'sun'
  | 'desktop'
  | 'picture'
  | 'video'
  | 'expand'
  | 'megaphone'
  | 'trophy'
  | 'map'
  | 'pencil'
  | 'strategy'
  | 'map-pin'
  | 'film'
  | 'address-book'
  | 'envelop'
  | 'location'
  | 'star-empty'
  | 'star-half'
  | 'star-full'

type IconProps = {
  className: string
  name: IconName
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
