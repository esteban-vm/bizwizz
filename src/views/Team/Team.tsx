import type { FC } from '@/types'
import { Section } from '@/components'
import TeamMate from './TeamMate'
import teamMates from './Team.data'

const Team: FC = () => {
  return (
    <Section bg='black' id='team' subtitle='Lorem ipsum dolor sit amet' title='Meet our team'>
      <div className='flex flex-wrap justify-evenly gap-7 md:gap-0'>
        {teamMates.map((teamMate) => (
          <TeamMate key={teamMate.id} {...teamMate} />
        ))}
      </div>
    </Section>
  )
}

export default Team
