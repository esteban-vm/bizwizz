import { render, cleanup, within, screen } from '@/tests'
import SocialLink, { type SocialLinkProps } from './SocialLink'

describe('Social Link:', () => {
  let asFragment: () => DocumentFragment

  const props: SocialLinkProps = {
    id: '929262c9-7c62-4107-b17c-d1db9dbe3575',
    to: 'facebook',
    className: 'class',
  }

  beforeEach(() => {
    void ({ asFragment } = render(<SocialLink {...props} />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const linkElem = screen.getByRole('link')
    expect(linkElem).toBeInTheDocument()
    expect(linkElem).toHaveAccessibleDescription(props.to)
    expect(linkElem).toHaveAttribute('id', props.id)
    const iconElem = within(linkElem).getByRole('img')
    expect(iconElem).toBeInTheDocument()
    expect(iconElem).toHaveAttribute('class', props.className)
  })
})
