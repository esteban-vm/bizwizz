import type { FC } from '@/types'
import { Wave } from '@/components'
import Work from './Work'
import works from './Portfolio.data'
import styles from './Portfolio.styles'

const Portfolio: FC = () => {
  return (
    <section aria-labelledby='portfolio_title' className={styles.wrapper('white')} id='portfolio'>
      <Wave is='black' />
      <div className={styles.header}>
        <h2 className={styles.heading} id='portfolio_title'>
          Our popular projects
        </h2>
        <h3 className={styles.subheading}>Lorem ipsum dolor sit amet</h3>
      </div>
      <div className={styles.works}>
        <div className={styles.work_column}>
          {works.slice(undefined, 2).map((work) => (
            <Work key={work.id} {...work} />
          ))}
        </div>
        <div className={styles.work_column}>
          {works.slice(2, 4).map((work) => (
            <Work key={work.id} {...work} />
          ))}
        </div>
        <div className={styles.work_column}>
          {works.slice(4, 6).map((work) => (
            <Work key={work.id} {...work} />
          ))}
        </div>
        <div className={styles.work_column}>
          {works.slice(6).map((work) => (
            <Work key={work.id} {...work} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
