import type { FC, ID } from '@/types'
import { SocialLink } from '@/components'
import styles from './TeamMate.styles'

export type TeamMateProps = {
  id: ID
  name: Capitalize<string>
  designation: string
}

const TeamMate: FC<TeamMateProps> = ({ id, name, designation }) => {
  return (
    <article className={styles.wrapper} id={id}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.designation}>{designation}</p>
        <div className={styles.links}>
          <SocialLink link='facebook' style={styles.icon} />
          <SocialLink link='twitter' style={styles.icon} />
          <SocialLink link='linkedin' style={styles.icon} />
        </div>
      </div>
    </article>
  )
}

export default TeamMate
