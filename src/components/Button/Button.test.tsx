import { render, cleanup, screen, userEvent } from '@/tests'
import Button from './Button'

describe('Button:', () => {
  afterEach(cleanup)

  it('should render correctly when type is button', () => {
    const { asFragment } = render(<Button text='click here' />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should call onClick when type is button', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick} text='test' />)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should render correctly when type is submit', () => {
    const { asFragment } = render(<Button text='submit form' isSubmit />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should not call onClick when type is submit', async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick} text='test' isSubmit />)
    await userEvent.click(screen.getByRole('button'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('should have correct structure', () => {
    render(<Button text='test' />)
    const buttonElem = screen.getByRole('button')
    expect(buttonElem).toBeInTheDocument()
    expect(buttonElem).toHaveTextContent(/test/i)
  })
})
