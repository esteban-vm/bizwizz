import type { FC } from '@/types'
import { Wave } from '@/components'
import Carousel from './Carousel'
import Testimonial from './Testimonial'
import testimonials from './Testimonials.data'
import styles from './Testimonials.styles'

const Testimonials: FC = () => {
  return (
    <section aria-labelledby='testimonials_title' className={styles.wrapper('black')} id='testimonials'>
      <Wave is='white' />
      <div className={styles.header}>
        <h2 className={styles.heading} id='testimonials_title'>
          Testimonials
        </h2>
        <h3 className={styles.subheading}>People seem to like us!</h3>
      </div>
      <div className={styles.testimonials}>
        <Carousel>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} {...testimonial} />
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials
