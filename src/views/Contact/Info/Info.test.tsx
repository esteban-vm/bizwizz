import { render, cleanup, within, screen } from '@/tests'
import Info from './Info'
import info from '../Contact.data'

describe('Info:', () => {
  let asFragment: () => DocumentFragment
  const [testInfo] = info

  beforeEach(() => {
    void ({ asFragment } = render(<Info {...testInfo} />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const infoElem = screen.getByRole('article')
    expect(infoElem).toBeInTheDocument()
    expect(infoElem).toHaveAttribute('id', testInfo.id)
    expect(within(infoElem).getByRole('img')).toBeInTheDocument()
    expect(within(infoElem).getByText(testInfo.detail.subject)).toBeInTheDocument()
    expect(within(infoElem).getByText(testInfo.detail.content)).toBeInTheDocument()
  })
})
