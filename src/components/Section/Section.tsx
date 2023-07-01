import type { FC, ReactNode, SectionID, BgColor } from '@/types'
import clsx from 'clsx'
import { Wave } from '../Wave'

interface SectionProps {
  id: SectionID
  title: Capitalize<string>
  subtitle?: Capitalize<string>
  bg: Exclude<BgColor, 'primary'>
  children: ReactNode
}

const Section: FC<SectionProps> = ({ id, title, subtitle, bg, children }) => {
  const titleID = `${id}_title`

  return (
    <section aria-labelledby={titleID} className={clsx('section', bg === 'white' ? 'bg-white' : 'bg-black')} id={id}>
      <Wave color={bg === 'white' ? 'black' : 'white'} />
      <header>
        <h2 id={titleID}>{title}</h2>
        {subtitle && <h3>{subtitle}</h3>}
      </header>
      {children}
    </section>
  )
}

export default Section
