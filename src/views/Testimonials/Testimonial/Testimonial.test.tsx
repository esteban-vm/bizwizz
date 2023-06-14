import { render, cleanup, within, screen } from '@/tests'
import Testimonial from './Testimonial'
import testimonials from '../Testimonials.data'

describe('Testimonial:', () => {
  let asFragment: () => DocumentFragment
  const [testTestimonial] = testimonials

  beforeEach(() => {
    void ({ asFragment } = render(<Testimonial {...testTestimonial} />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const testimonialElem = screen.getByRole('article')
    expect(testimonialElem).toBeInTheDocument()
    expect(testimonialElem).toHaveAttribute('id', testTestimonial.id)
    expect(within(testimonialElem).getAllByRole('img', { name: '' })).toHaveLength(5)
    expect(within(testimonialElem).getByText(/lorem ipsum/i)).toBeInTheDocument()
    expect(within(testimonialElem).getByRole('img', { name: `${testTestimonial.name}'s photo` })).toBeInTheDocument()
    expect(within(testimonialElem).getByText(testTestimonial.name)).toBeInTheDocument()
    expect(within(testimonialElem).getByText(testTestimonial.designation)).toBeInTheDocument()
  })
})
