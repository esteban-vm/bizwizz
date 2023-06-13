import type { FC, ID, IconName } from '@/types'
import { Icon } from '@/components'
import styles from './TeamMate.styles'

export type TeamMateProps = {
  id: ID
  name: Capitalize<string>
  designation: string
}

const socialMediaLinks: IconName[] = ['facebook', 'twitter', 'linkedin']

const TeamMate: FC<TeamMateProps> = ({ id, name, designation }) => {
  return (
    <article className={styles.wrapper} id={id}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.designation}>{designation}</p>
        <div className={styles.links}>
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={`https://www.${link}.com`} target='_blank' title={link}>
              <Icon className={styles.icon} name={link} />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default TeamMate
