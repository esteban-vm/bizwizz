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
}

const Icon: FC<IconProps> = ({ className, name }) => {
  return (
    <svg className={className} role='img'>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  )
}

export default Icon
