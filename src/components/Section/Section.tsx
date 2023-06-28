import type { FC, ReactNode } from '@/types'
import { Wave } from '../Wave'
import styles from './Section.styles'

export type SectionID = 'contact' | 'portfolio' | 'services' | 'team' | 'testimonials'

interface SectionProps {
  id: SectionID
  title: Capitalize<string>
  subtitle?: Capitalize<string>
  bg: 'white' | 'black'
  children: ReactNode
}

const Section: FC<SectionProps> = ({ id, title, subtitle, bg, children }) => {
  const titleID = `${id}_title`

  return (
    <section aria-labelledby={titleID} className={styles.wrapper(bg)} id={id}>
      <Wave color={bg === 'black' ? 'white' : 'black'} />
      <header className={styles.header}>
        <h2 className={styles.heading} id={titleID}>
          {title}
        </h2>
        {subtitle && <h3 className={styles.subheading}>{subtitle}</h3>}
      </header>
      {children}
    </section>
  )
}

export default Section
