import { render, cleanup, screen } from '@/tests'
import Wave from './Wave'

describe('Wave:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Wave isPrimary />))
  })

  afterEach(cleanup)

  it('should match snapshot', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly', () => {
    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })
})
