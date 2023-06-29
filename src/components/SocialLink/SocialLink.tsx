import type { FC, IconName } from '@/types'
import { Icon } from '../Icon'

interface SocialLinkProps {
  to: Extract<IconName, 'facebook' | 'twitter' | 'linkedin'>
  className?: string
}

const SocialLink: FC<SocialLinkProps> = ({ to: socialMedia, ...props }) => {
  return (
    <a href={`https://www.${socialMedia}.com`} rel='noreferrer' target='_blank' title={socialMedia}>
      <Icon name={socialMedia} {...props} />
    </a>
  )
}

export default SocialLink
