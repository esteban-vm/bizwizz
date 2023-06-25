import type { FC } from '@/types'
import { Icon, type IconName } from '../Icon'

type SocialLinkProps = {
  link: IconName
  style?: string
}

const SocialLink: FC<SocialLinkProps> = ({ link, style }) => {
  return (
    <a href={`https://www.${link}.com`} rel='noreferrer' target='_blank' title={link}>
      <Icon className={style} name={link} />
    </a>
  )
}

export default SocialLink
