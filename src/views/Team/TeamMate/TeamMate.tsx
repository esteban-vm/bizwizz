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
    <article
      id={id}
      className={`
        relative
        h-96
        w-96
        select-none
        rounded-full
        border-[3px]
        border-solid
        border-primary
        bg-cover
        bg-center
        first:bg-[url('/images/team-mate-1.jpg')]
        last:bg-[url('/images/team-mate-3.jpg')]
        even:bg-[url('/images/team-mate-2.jpg')]
        [&>div:last-child]:hover:top-1/2
        [&>div]:hover:opacity-100
      `}
    >
      <div
        className={`
          absolute
          left-0
          top-0
          h-full
          w-full
          rounded-full
          bg-primary/70
          opacity-0
          transition-opacity
          duration-200
        `}
      />
      <div
        className={`
          absolute
          left-1/2
          top-[30%]
          -translate-x-1/2
          -translate-y-1/2
          text-white
          opacity-0
          transition-all
          duration-500
        `}
      >
        <h4 className='text-[2.7rem] font-semibold'>{name}</h4>
        <p className='text-2xl font-medium'>{designation}</p>
        <div className='mt-8 flex justify-between'>
          {socialMediaLinks.map((link, index) => (
            <a key={index} href={`https://www.${link}.com`} target='_blank' title={link}>
              <Icon name={link} className='m-[2.6px] h-12 w-12 fill-white hover:fill-primary-light' />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default TeamMate
