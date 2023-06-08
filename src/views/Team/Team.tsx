import type { FC } from '@/types'
import { Wave } from '@/components'
import TeamMate, { type TeamMateProps } from './TeamMate'

export const teamMates: TeamMateProps[] = [
  { id: 'fec6d982-1994-4d02-9cc7-18a86719fb7c', name: 'Paula Lee', designation: 'CEO' },
  { id: 'c512f1ff-6fff-4aee-be97-7c0697204186', name: 'Ted Johnson', designation: 'Co-Founder' },
  { id: '37d5c8a6-3234-42f1-8379-65b50f5f12cb', name: 'Miranda Shaffer', designation: 'Lead Designer' },
]

const Team: FC = () => {
  return (
    <section id='team' aria-labelledby='team_title' className='section bg-black'>
      <Wave is='white' />
      <div className='section_header'>
        <h2 id='team_title' className='section_heading'>
          Meet our team
        </h2>
        <h3 className='section_subheading'>Lorem ipsum dolor sit amet</h3>
      </div>
      <div className='flex flex-wrap justify-evenly'>
        {teamMates.map((teamMate) => (
          <TeamMate key={teamMate.id} {...teamMate} />
        ))}
      </div>
    </section>
  )
}

export default Team
