import { render, cleanup, screen } from '@/tests'
import Icon from './Icon'
import Icons from './Icons'

describe('Icon:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(
      <>
        <Icons />
        <Icon className='fill-primary' name='desktop' />
      </>
    ))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const iconElem = screen.getByRole('img', { hidden: true })
    expect(iconElem).toBeInTheDocument()
    expect(iconElem).toHaveAttribute('class', 'fill-primary')
  })
})
