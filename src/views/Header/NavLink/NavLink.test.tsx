import { render, cleanup, within, screen } from '@/tests'
import NavLink from './NavLink'
import navLinks from '../Header.data'

describe('Nav Link:', () => {
  let asFragment: () => DocumentFragment
  const [testNavLink] = navLinks

  beforeEach(() => {
    void ({ asFragment } = render(<NavLink {...testNavLink} />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const navLinkElem = screen.getByRole('listitem')
    expect(navLinkElem).toBeInTheDocument()
    expect(navLinkElem).toHaveAttribute('id', testNavLink.id)
    const linkElem = within(navLinkElem).getByRole('link', { name: testNavLink.text })
    expect(linkElem).toBeInTheDocument()
    expect(linkElem).toHaveAttribute('href', testNavLink.link)
  })
})
