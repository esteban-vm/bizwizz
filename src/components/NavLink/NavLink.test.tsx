import { render, cleanup, within, screen } from '@/tests'
import NavLink, { type NavLinkProps } from './NavLink'

describe('Nav Link:', () => {
  let asFragment: () => DocumentFragment

  const props: NavLinkProps = {
    id: '31c97b93-9ad9-4064-9a41-d8034c2faccf',
    text: 'Contact',
    to: '#contact',
    className: 'nav_link header',
  }

  beforeEach(() => {
    void ({ asFragment } = render(<NavLink {...props} />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const navLinkElem = screen.getByRole('listitem')
    expect(navLinkElem).toBeInTheDocument()
    expect(navLinkElem).toHaveAttribute('id', props.id)
    expect(navLinkElem).toHaveAttribute('class', props.className)
    const linkElem = within(navLinkElem).getByRole('link', { name: props.text })
    expect(linkElem).toBeInTheDocument()
    expect(linkElem).toHaveAttribute('href', props.to)
  })
})
