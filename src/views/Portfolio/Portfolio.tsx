import type { FC } from '@/types'
import { Section } from '@/components'
import Work, { type WorkProps } from './Work'
import works from './Portfolio.data'
import styles from './Portfolio.styles'

const Portfolio: FC = () => {
  const pairedWorks = works.reduce<[WorkProps, WorkProps][]>((acc, _, index, array) => {
    if (index < array.length / 2) acc.push([array[index * 2], array[index * 2 + 1]])
    return acc
  }, [])

  return (
    <Section bg='white' id='portfolio' subtitle='Lorem ipsum dolor sit amet' title='Our popular projects'>
      <div className={styles.wrapper}>
        {pairedWorks.map(([work1, work2], index) => (
          <div key={index} className={styles.column}>
            <Work {...work1} />
            <Work {...work2} />
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Portfolio
