import type { FC } from 'react'
import { Wrapper } from '@/layouts'
import TeamMate, { type TeamMateProps } from './TeamMate'

export const teamMates: TeamMateProps[] = [
  { id: 'fec6d982-1994-4d02-9cc7-18a86719fb7c', name: 'Paula Lee', designation: 'CEO' },
  { id: 'c512f1ff-6fff-4aee-be97-7c0697204186', name: 'Ted Johnson', designation: 'Co-Founder' },
  { id: '37d5c8a6-3234-42f1-8379-65b50f5f12cb', name: 'Miranda Shaffer', designation: 'Lead Designer' },
]

const Team: FC = () => {
  return (
    <Wrapper title='Meet our team' label='team'>
      <div className='flex flex-wrap justify-evenly'>
        {teamMates.map((teamMate) => (
          <TeamMate key={teamMate.id} {...teamMate} />
        ))}
      </div>
    </Wrapper>
  )
}

export default Team
