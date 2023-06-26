import { render, cleanup, within, screen } from '@/tests'
import Testimonials from './Testimonials'
import testimonials from './Testimonials.data'

describe('Testimonials:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Testimonials />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const title = /testimonials/i
    const subtitle = /people seem to like us!/i
    const testimonialsElem = screen.getByRole('region')
    expect(testimonialsElem).toBeInTheDocument()
    expect(testimonialsElem).toHaveAccessibleName(title)
    expect(testimonialsElem).toHaveAttribute('id', 'testimonials')
    expect(within(testimonialsElem).getByRole('presentation', { hidden: true })).toBeInTheDocument()
    expect(within(testimonialsElem).getByRole('heading', { name: title, level: 2 })).toBeInTheDocument()
    expect(within(testimonialsElem).getByRole('heading', { name: subtitle, level: 3 })).toBeInTheDocument()
    expect(within(testimonialsElem).getByRole('group')).toBeInTheDocument()
    expect(within(testimonialsElem).getAllByRole('article')).toHaveLength(testimonials.length)
  })
})
