import { render, cleanup, within, screen } from '@/tests'
import CTA from './CTA'

describe('CTA:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<CTA />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const title = /let's talk/i
    const ctaElem = screen.getByRole('region')
    expect(ctaElem).toBeInTheDocument()
    expect(ctaElem).toHaveAccessibleName(title)
    expect(ctaElem).toHaveAttribute('id', 'call-to-action')
    expect(screen.getByRole('presentation', { hidden: true })).toBeInTheDocument()
    expect(within(ctaElem).getByRole('link', { description: /facebook/i })).toBeInTheDocument()
    expect(within(ctaElem).getByRole('link', { description: /twitter/i })).toBeInTheDocument()
    expect(within(ctaElem).getByRole('link', { description: /linkedin/i })).toBeInTheDocument()
    expect(within(ctaElem).getByRole('heading', { name: title, level: 2 })).toBeInTheDocument()
    expect(within(ctaElem).getByRole('button', { name: /get a quote today/i })).toBeInTheDocument()
  })
})
