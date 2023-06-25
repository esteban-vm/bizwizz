import type { FC } from '@/types'
import { Section } from '@/components'
import Work from './Work'
import works from './Portfolio.data'
import styles from './Portfolio.styles'

const Portfolio: FC = () => {
  return (
    <Section bg='white' id='portfolio' subtitle='Lorem ipsum dolor sit amet' title='Our popular projects'>
      <div className={styles.wrapper}>
        {[...Array(4)].map((_, index) => {
          const start = index * 2
          const end = start + 2

          return (
            <div key={index} className={styles.column}>
              {works.slice(start, end).map((work) => (
                <Work key={work.id} {...work} />
              ))}
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default Portfolio
