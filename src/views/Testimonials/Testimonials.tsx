import type { FC } from '@/types'
import { Section } from '@/components'
import Carousel from './Carousel'
import Testimonial from './Testimonial'
import testimonials from './Testimonials.data'

const Testimonials: FC = () => {
  return (
    <Section bg='black' id='testimonials' subtitle='People seem to like us!' title='Testimonials'>
      <div className='m-[0_auto] w-3/4 md:w-1/2 lg:w-5/12 xl:w-1/3'>
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
