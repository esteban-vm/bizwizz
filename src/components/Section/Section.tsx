import type { FC, ReactNode, SectionID, BgColor } from '@/types'
import { Wave } from '../Wave'
import styles from './Section.styles'

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
    <section aria-labelledby={titleID} className={styles.wrapper(bg)} id={id}>
      <Wave color={bg === 'white' ? 'black' : 'white'} />
      <header className={styles.header}>
        <h2 className={styles.title} id={titleID}>
          {title}
        </h2>
        {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
      </header>
      {children}
    </section>
  )
}

export default Section
