import { render, cleanup, within, screen } from '@/tests'
import { links } from '../Header'
import NavLink from './NavLink'

describe('Nav Link:', () => {
  let asFragment: () => DocumentFragment
  const [testLink] = links

  beforeEach(() => {
    void ({ asFragment } = render(<NavLink {...testLink} />))
  })

  afterEach(cleanup)

  it('should match snapshot', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const navLink = screen.getByRole('listitem')
    expect(navLink).toBeInTheDocument()
    expect(within(navLink).getByRole('link', { name: testLink.text })).toBeInTheDocument()
  })
})
