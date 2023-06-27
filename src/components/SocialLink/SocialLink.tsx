import type { FC } from '@/types'
import { Icon, type IconName } from '../Icon'

type SocialLinkProps = {
  to: Extract<IconName, 'facebook' | 'twitter' | 'linkedin'>
  className?: string
}

const SocialLink: FC<SocialLinkProps> = ({ to: socialMedia, className }) => {
  return (
    <a href={`https://www.${socialMedia}.com`} rel='noreferrer' target='_blank' title={socialMedia}>
      <Icon className={className} name={socialMedia} />
    </a>
  )
}

export default SocialLink
