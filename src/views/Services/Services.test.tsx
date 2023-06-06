import { render, cleanup, within, screen } from '@/tests'
import Services from './Services'

describe('Services:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Services />))
  })

  afterEach(cleanup)

  it('should match snapshot', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const services = screen.getByRole('region', { name: /our services/i })
    expect(services).toBeInTheDocument()
    expect(within(services).getByRole('heading', { level: 2 })).toBeInTheDocument()
    expect(within(services).getByRole('heading', { name: /lorem ipsum dolor sit amet/i, level: 3 })).toBeInTheDocument()
  })
})
