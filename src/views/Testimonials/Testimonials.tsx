import type { FC } from '@/types'
import { Wave } from '@/components'
import Carousel from './Carousel'
import Testimonial, { type TestimonialProps } from './Testimonial'

export const testimonials: TestimonialProps[] = [
  {
    id: 'cdbc1f6c-4153-40f2-a00c-e0957fa2812b',
    name: 'Paul Rodriguez',
    designation: 'Marketer',
    image: { src: '/images/client-1.jpg', height: 536, width: 536 },
    stars: 4,
  },
  {
    id: '74294d20-8111-461a-aa03-afb975deecb8',
    name: 'Ted Johnson',
    designation: 'Life Coach',
    image: { src: '/images/client-2.jpg', height: 523, width: 900 },
    stars: 5,
  },
  {
    id: '827a14ec-c61a-4e3d-b8fc-b1de05c4077b',
    name: 'Paula Lee',
    designation: 'Analyst',
    image: { src: '/images/client-3.jpg', height: 458, width: 592 },
    stars: 3,
  },
]

const Testimonials: FC = () => {
  return (
    <section aria-labelledby='testimonials_title' className='section bg-black' id='testimonials'>
      <Wave is='white' />
      <div className='section_header'>
        <h2 className='section_heading' id='testimonials_title'>
          Testimonials
        </h2>
        <h3 className='section_subheading'>People seem to like us!</h3>
      </div>
      <div className='m-[0_auto] w-[30%]'>
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
