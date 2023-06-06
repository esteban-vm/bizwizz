import type { FC } from 'react'

export type IconProps = {
  className: string
  name:
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
    | 'facebook'
    | 'instagram'
    | 'twitter'
}

const Icon: FC<IconProps> = ({ className, name }) => {
  return (
    <svg className={className} role='img'>
      <use xlinkHref={`#icon-${name}`} />
    </svg>
  )
}

export default Icon
