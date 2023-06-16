'use client'
/* eslint-disable jsx-a11y/label-has-associated-control */
import type { FC, PropsWithChildren } from '@/types'
import { useRef, useEffect } from 'react'
import { Icon } from '@/components'
import styles from './Carousel.styles'

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const slide1Ref = useRef<HTMLInputElement>(null)
  const slide2Ref = useRef<HTMLInputElement>(null)
  const slide3Ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (slide1Ref.current) {
      slide1Ref.current.checked = true
    }
  }, [])

  const leftClick = () => {
    if (slide1Ref.current && slide2Ref.current && slide3Ref.current) {
      if (slide1Ref.current.checked) slide3Ref.current.checked = true
      else if (slide2Ref.current.checked) slide1Ref.current.checked = true
      else if (slide3Ref.current.checked) slide2Ref.current.checked = true
    }
  }

  const rightClick = () => {
    if (slide1Ref.current && slide2Ref.current && slide3Ref.current) {
      if (slide1Ref.current.checked) slide2Ref.current.checked = true
      else if (slide2Ref.current.checked) slide3Ref.current.checked = true
      else if (slide3Ref.current.checked) slide1Ref.current.checked = true
    }
  }

  return (
    <div className={styles.outer_wrapper}>
      <Icon className={styles.icon} name='chevron-left' onClick={leftClick} />
      <div className={styles.inner_wrapper}>
        <input ref={slide1Ref} className={styles.radio} id='slide_1' name='slide' type='radio' />
        <input ref={slide2Ref} className={styles.radio} id='slide_2' name='slide' type='radio' />
        <input ref={slide3Ref} className={styles.radio} id='slide_3' name='slide' type='radio' />
        <div className={styles.label_container}>
          <label className={styles.label} htmlFor='slide_1' />
          <label className={styles.label} htmlFor='slide_2' />
          <label className={styles.label} htmlFor='slide_3' />
        </div>
        <div className={styles.slider}>{children}</div>
      </div>
      <Icon className={styles.icon} name='chevron-right' onClick={rightClick} />
    </div>
  )
}

export default Carousel
