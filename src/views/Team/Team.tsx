import type { FC } from '@/types'
import { Section } from '@/components'
import TeamMate from './TeamMate'
import teamMates from './Team.data'
import styles from './Team.styles'

const Team: FC = () => {
  return (
    <Section bg='black' id='team' subtitle='Lorem ipsum dolor sit amet' title='Meet our team'>
      <div className={styles.wrapper}>
        {teamMates.map((teamMate) => (
          <TeamMate key={teamMate.id} {...teamMate} />
        ))}
      </div>
    </Section>
  )
}

export default Team
