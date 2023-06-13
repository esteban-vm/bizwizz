import type { FC } from '@/types'
import { Wave } from '@/components'
import TeamMate from './TeamMate'
import teamMates from './Team.data'
import styles from './Team.styles'

const Team: FC = () => {
  return (
    <section aria-labelledby='team_title' className={styles.wrapper('black')} id='team'>
      <Wave is='white' />
      <div className={styles.header}>
        <h2 className={styles.heading} id='team_title'>
          Meet our team
        </h2>
        <h3 className={styles.subheading}>Lorem ipsum dolor sit amet</h3>
      </div>
      <div className={styles.team_mates}>
        {teamMates.map((teamMate) => (
          <TeamMate key={teamMate.id} {...teamMate} />
        ))}
      </div>
    </section>
  )
}

export default Team
