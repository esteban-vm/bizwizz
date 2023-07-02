import type { FC, UUID, SocialLinkProps } from '@/types'
import { SocialLink } from '@/components'
import styles from './TeamMate.styles'

const socialLinks: SocialLinkProps[] = [
  { id: 'bb186afa-ef11-40ff-88ad-48256a6d6f6c', to: 'facebook', className: styles.link },
  { id: '83f3fe76-d766-4c2b-9de3-59ce8218d7ef', to: 'twitter', className: styles.link },
  { id: '2f6d3dce-7da0-4433-9a31-b597b51b40f0', to: 'linkedin', className: styles.link },
]

export interface TeamMateProps {
  id: UUID
  name: `${Capitalize<string>} ${Capitalize<string>}`
  designation: Capitalize<string>
}

const TeamMate: FC<TeamMateProps> = ({ name, designation, ...props }) => {
  return (
    <article className={styles.wrapper} {...props}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.designation}>{designation}</p>
        <div className={styles.links}>
          {socialLinks.map((link) => (
            <SocialLink key={link.id} {...link} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default TeamMate
