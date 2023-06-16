import { render, cleanup, screen, userEvent } from '@/tests'
import Icon from './Icon'

describe('Icon:', () => {
  afterEach(cleanup)

  it('should render correctly', () => {
    const { asFragment } = render(<Icon className='fill-primary' name='desktop' />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    render(<Icon className='fill-primary' name='desktop' />)
    const iconElem = screen.getByRole('img', { hidden: true })
    expect(iconElem).toBeInTheDocument()
    expect(iconElem).toHaveAttribute('class', 'fill-primary')
  })

  it('should call onClick', async () => {
    const onClick = vi.fn()
    render(<Icon className='fill-primary' name='desktop' onClick={onClick} />)
    const iconElem = screen.getByRole('img', { hidden: true })
    await userEvent.click(iconElem)
    expect(onClick).toHaveBeenCalled()
  })
})
