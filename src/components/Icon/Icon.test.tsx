import { render, cleanup, screen } from '@/tests'
import Icon from './Icon'

describe('Icon:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Icon className='fill-primary' name='desktop' />))
  })

  afterEach(cleanup)

  it('should match snapshot', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly', () => {
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
