import { render, cleanup, within, screen } from '@/tests'
import SocialLink from './SocialLink'

describe('Social Link:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<SocialLink to='facebook' />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const linkElem = screen.getByRole('link')
    expect(linkElem).toBeInTheDocument()
    expect(linkElem).toHaveAccessibleDescription(/facebook/i)
    expect(within(linkElem).getByRole('img')).toBeInTheDocument()
  })
})
