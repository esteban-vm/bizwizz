import { render, cleanup, screen } from '@/tests'
import Button from './Button'

describe('Button:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Button text='test' />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const buttonElem = screen.getByRole('button')
    expect(buttonElem).toBeInTheDocument()
    expect(buttonElem).toHaveTextContent(/test/i)
  })
})
