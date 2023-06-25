import type { FC } from '@/types'
import { Section } from '@/components'
import Carousel from './Carousel'
import Testimonial from './Testimonial'
import testimonials from './Testimonials.data'
import styles from './Testimonials.styles'

const Testimonials: FC = () => {
  return (
    <Section bg='black' id='testimonials' subtitle='People seem to like us!' title='Testimonials'>
      <div className={styles.wrapper}>
        <Carousel>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </Carousel>
      </div>
    </Section>
  )
}

export default Testimonials
