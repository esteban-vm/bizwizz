import { render, cleanup, within, screen } from '@/tests'
import Services from './Services'
import services from './Services.data'

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
    const title = /our services/i
    const subtitle = /lorem ipsum dolor sit amet/i
    const servicesElem = screen.getByRole('region')
    expect(servicesElem).toBeInTheDocument()
    expect(servicesElem).toHaveAccessibleName(title)
    expect(servicesElem).toHaveAttribute('id', 'services')
    expect(within(servicesElem).getByRole('presentation', { hidden: true })).toBeInTheDocument()
    expect(within(servicesElem).getByRole('heading', { name: title, level: 2 })).toBeInTheDocument()
    expect(within(servicesElem).getByRole('heading', { name: subtitle, level: 3 })).toBeInTheDocument()
    expect(within(servicesElem).getAllByRole('article')).toHaveLength(services.length)
  })
})
