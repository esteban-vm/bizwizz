import { render, cleanup, within, screen } from '@/tests'
import Header from './Header'
import navLinks from './Header.data'

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
    const title = /bizwizz/i
    const subtitle = /innovate, transform and lead/i
    const headerElem = screen.getByRole('banner')
    expect(headerElem).toBeInTheDocument()
    expect(headerElem).toHaveAccessibleName(title)
    expect(headerElem).toHaveAttribute('id', 'home')
    expect(within(headerElem).getByRole('presentation', { hidden: true })).toBeInTheDocument()
    expect(within(headerElem).getByRole('img', { name: /bizwizz logo/i })).toBeInTheDocument()
    expect(within(headerElem).getByRole('navigation')).toBeInTheDocument()
    expect(within(headerElem).getByRole('list')).toBeInTheDocument()
    expect(within(headerElem).getAllByRole('listitem')).toHaveLength(navLinks.length)
    expect(within(headerElem).getByRole('heading', { name: title, level: 1 })).toBeInTheDocument()
    expect(within(headerElem).getByRole('heading', { name: subtitle, level: 2 })).toBeInTheDocument()
    expect(within(headerElem).getByRole('button', { name: /get a quote today/i })).toBeInTheDocument()
  })
})
