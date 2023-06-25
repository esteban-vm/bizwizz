import type { FC } from '@/types'
import { Section } from '@/components'
import Work from './Work'
import works from './Portfolio.data'
import styles from './Portfolio.styles'

const Portfolio: FC = () => {
  return (
    <Section bg='white' id='portfolio' subtitle='Lorem ipsum dolor sit amet' title='Our popular projects'>
      <div className={styles.wrapper}>
        <div className={styles.column}>
          {works.slice(0, 2).map((work) => (
            <Work key={work.id} {...work} />
          ))}
        </div>
        <div className={styles.column}>
          {works.slice(2, 4).map((work) => (
            <Work key={work.id} {...work} />
          ))}
        </div>
        <div className={styles.column}>
          {works.slice(4, 6).map((work) => (
            <Work key={work.id} {...work} />
          ))}
        </div>
        <div className={styles.column}>
          {works.slice(6).map((work) => (
            <Work key={work.id} {...work} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Portfolio
