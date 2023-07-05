'use client'
import type { FC, ReactNode } from '@/types'
import { useRef, useEffect } from 'react'
import { Icon } from '@/components'
import styles from './Carousel.styles'

interface CarouselProps {
  children: ReactNode
}

const Carousel: FC<CarouselProps> = ({ children }) => {
  const slider = useRef<HTMLDivElement>(null)
  const slides = [...Array(3).keys()].map((key) => `slide_${key + 1}`)

  useEffect(() => {
    if (slider.current) {
      const slide1 = slider.current.querySelector('input') as HTMLInputElement
      slide1.checked = true
    }

    const timer = setInterval(handleClick('right'), 5_000)
    return () => clearInterval(timer)
  }, [])

  const handleClick = (side: 'left' | 'right') => {
    return () => {
      if (slider.current) {
        const [slide1, slide2, slide3] = slider.current.querySelectorAll('input')

        const checked1 = slide1.checked
        const checked2 = slide2.checked
        const checked3 = slide3.checked

        if (side === 'left') {
          if (checked1) slide3.checked = true
          else if (checked2) slide1.checked = true
          else if (checked3) slide2.checked = true
        }

        if (side === 'right') {
          if (checked1) slide2.checked = true
          else if (checked2) slide3.checked = true
          else if (checked3) slide1.checked = true
        }
      }
    }
  }

  return (
    <div aria-roledescription='carousel' className={styles.outer_wrapper} role='group'>
      <Icon className={styles.icon} name='chevron-left' onClick={handleClick('left')} />
      <div ref={slider} className={styles.inner_wrapper}>
        {slides.map((slide, index) => (
          <input key={index} className={styles.radio} id={slide} name='slide' type='radio' />
        ))}
        <div className={styles.label_container}>
          {slides.map((slide, index) => (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label key={index} className={styles.label} htmlFor={slide} />
          ))}
        </div>
        <div className={styles.slider}>{children}</div>
      </div>
      <Icon className={styles.icon} name='chevron-right' onClick={handleClick('right')} />
    </div>
  )
}

export default Carousel
