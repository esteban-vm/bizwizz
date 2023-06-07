import { render, cleanup, within, screen } from '@/tests'
import Header, { navLinks } from './Header'

describe('Header:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Header />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const headerElem = screen.getByRole('banner')
    expect(headerElem).toBeInTheDocument()
    expect(within(headerElem).getByRole('presentation')).toBeInTheDocument()
    expect(within(headerElem).getByRole('img', { name: /bizwizz logo/i })).toBeInTheDocument()
    expect(within(headerElem).getByRole('navigation')).toBeInTheDocument()
    expect(within(headerElem).getByRole('list')).toBeInTheDocument()
    expect(within(headerElem).getAllByRole('listitem')).toHaveLength(navLinks.length)
    expect(within(headerElem).getByRole('heading', { name: /bizwizz/i, level: 1 })).toBeInTheDocument()
    expect(within(headerElem).getByRole('heading', { name: /innovate, transform/i, level: 2 })).toBeInTheDocument()
    expect(within(headerElem).getByRole('button', { name: /get a quote today/i })).toBeInTheDocument()
  })
})
