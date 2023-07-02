import { render, cleanup, within, screen } from '@/tests'
import Footer from './Footer'
import navLinks from './Footer.data'

describe('Footer:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Footer />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const footerElem = screen.getByRole('contentinfo')
    expect(footerElem).toBeInTheDocument()
    expect(within(footerElem).getByText(/this website has been created by/i)).toBeInTheDocument()
    expect(within(footerElem).getByRole('link', { name: /Esteban V\.M\./ })).toBeInTheDocument()
    expect(within(footerElem).getByRole('navigation')).toBeInTheDocument()
    expect(within(footerElem).getByRole('list')).toBeInTheDocument()
    expect(within(footerElem).getAllByRole('listitem')).toHaveLength(navLinks.length)
  })
})
