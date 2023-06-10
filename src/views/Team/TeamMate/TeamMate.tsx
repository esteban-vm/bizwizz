import type { FC, ID, IconName } from '@/types'
import { Icon } from '@/components'

export type TeamMateProps = {
  id: ID
  name: Capitalize<string>
  designation: string
}

const socialMediaLinks: IconName[] = ['facebook', 'twitter', 'linkedin']

const TeamMate: FC<TeamMateProps> = ({ id, name, designation }) => {
  return (
    <article id={id} className='team_mate'>
      <div className='team_mate_overlay' />
      <div className='team_mate_content'>
        <h4 className='team_mate_name'>{name}</h4>
        <p className='team_mate_designation'>{designation}</p>
        <div className='team_mate_links'>
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={`https://www.${link}.com`} target='_blank' title={link}>
              <Icon name={link} className='team_mate_icon' />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default TeamMate
