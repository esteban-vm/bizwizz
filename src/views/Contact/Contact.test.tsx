import { render, cleanup, within, screen } from '@/tests'
import Contact from './Contact'
import info from './Contact.data'

describe('Contact:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Contact />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const title = /contact us/i
    const subtitle = /get in touch/i
    const contactElem = screen.getByRole('region')
    expect(contactElem).toBeInTheDocument()
    expect(contactElem).toHaveAccessibleName(title)
    expect(contactElem).toHaveAttribute('id', 'contact')
    expect(within(contactElem).getByRole('presentation', { hidden: true })).toBeInTheDocument()
    expect(within(contactElem).getByRole('heading', { name: title, level: 2 })).toBeInTheDocument()
    expect(within(contactElem).getByRole('heading', { name: subtitle, level: 3 })).toBeInTheDocument()
    expect(within(contactElem).getByText(/lorem, ipsum/i)).toBeInTheDocument()
    expect(within(contactElem).getAllByRole('article')).toHaveLength(info.length)
    expect(within(contactElem).getByRole('form')).toBeInTheDocument()
  })
})
