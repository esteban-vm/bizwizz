'use client'
/* eslint-disable jsx-a11y/label-has-associated-control */
import type { FC, PropsWithChildren } from '@/types'
import { useRef, useEffect } from 'react'
import { Icon } from '@/components'
import styles from './Carousel.styles'

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  const slider = useRef<HTMLDivElement>(null)
  const slides = [...Array(3)].map((_, index) => `slide_${index + 1}`)

  useEffect(() => {
    if (slider.current) {
      const slide1 = slider.current.querySelector('input') as HTMLInputElement
      slide1.checked = true
    }
  }, [])

  const handleClick = (side: 'left' | 'right') => {
    return () => {
      if (slider.current) {
        const [slide1, slide2, slide3] = Array.from(slider.current.querySelectorAll('input')) as HTMLInputElement[]

        if (side === 'left') {
          if (slide1.checked) slide3.checked = true
          else if (slide2.checked) slide1.checked = true
          else if (slide3.checked) slide2.checked = true
        }

        if (side === 'right') {
          if (slide1.checked) slide2.checked = true
          else if (slide2.checked) slide3.checked = true
          else if (slide3.checked) slide1.checked = true
        }
      }
    }
  }

  return (
    <div className={styles.outer_wrapper}>
      <Icon className={styles.icon} name='chevron-left' onClick={handleClick('left')} />
      <div ref={slider} className={styles.inner_wrapper}>
        {slides.map((slide) => (
          <input key={slide} className={styles.radio} id={slide} name='slide' type='radio' />
        ))}
        <div className={styles.label_container}>
          {slides.map((slide) => (
            <label key={slide} className={styles.label} htmlFor={slide} />
          ))}
        </div>
        <div className={styles.slider}>{children}</div>
      </div>
      <Icon className={styles.icon} name='chevron-right' onClick={handleClick('right')} />
    </div>
  )
}

export default Carousel
