/* eslint-disable jsx-a11y/label-has-associated-control */

import type { FC, PropsWithChildren } from '@/types'
import styles from './Carousel.styles'

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.radio} id='slide_1' name='slide' type='radio' value='1' />
      <input className={styles.radio} id='slide_2' name='slide' type='radio' value='2' />
      <input className={styles.radio} id='slide_3' name='slide' type='radio' value='3' />
      <div className={styles.label_container}>
        <label className={styles.label} htmlFor='slide_1' />
        <label className={styles.label} htmlFor='slide_2' />
        <label className={styles.label} htmlFor='slide_3' />
      </div>
      <div className={styles.slide}>{children}</div>
    </div>
  )
}

export default Carousel
