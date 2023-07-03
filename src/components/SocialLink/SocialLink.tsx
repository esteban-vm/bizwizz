import type { FC, UUID, IconName } from '@/types'
import { Icon } from '../Icon'

export interface SocialLinkProps {
  id: UUID
  to: Extract<IconName, 'facebook' | 'twitter' | 'linkedin'>
  className: `social_link ${'cta' | 'team_mate'}`
}

const SocialLink: FC<SocialLinkProps> = ({ id, to: socialMedia, ...props }) => {
  return (
    <a href={`https://www.${socialMedia}.com`} id={id} rel='noreferrer' target='_blank' title={socialMedia}>
      <Icon name={socialMedia} {...props} />
    </a>
  )
}

export default SocialLink
