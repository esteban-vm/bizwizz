import type { FC, UUID } from '@/types'
import { SocialLink } from '@/components'
import styles from './TeamMate.styles'

export type TeamMateProps = {
  id: UUID
  name: `${Capitalize<string>} ${Capitalize<string>}`
  designation: Capitalize<string>
}

const TeamMate: FC<TeamMateProps> = ({ id, name, designation }) => {
  return (
    <article className={styles.wrapper} id={id}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.designation}>{designation}</p>
        <div className={styles.links}>
          <SocialLink className={styles.icon} to='facebook' />
          <SocialLink className={styles.icon} to='twitter' />
          <SocialLink className={styles.icon} to='linkedin' />
        </div>
      </div>
    </article>
  )
}

export default TeamMate
