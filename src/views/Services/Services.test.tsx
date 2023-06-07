import { render, cleanup, within, screen } from '@/tests'
import Services, { services } from './Services'

describe('Services:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Services />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const servicesElem = screen.getByRole('region')
    expect(servicesElem).toBeInTheDocument()
    expect(within(servicesElem).getByRole('heading', { name: /our services/i, level: 2 })).toBeInTheDocument()
    expect(within(servicesElem).getAllByRole('article')).toHaveLength(services.length)
  })
})
