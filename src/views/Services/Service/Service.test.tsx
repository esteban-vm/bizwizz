import { render, cleanup, within, screen } from '@/tests'
import Service from './Service'
import services from '../Services.data'

describe('Service:', () => {
  let asFragment: () => DocumentFragment
  const [testService] = services

  beforeEach(() => {
    void ({ asFragment } = render(<Service {...testService} />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const serviceElem = screen.getByRole('article')
    expect(serviceElem).toBeInTheDocument()
    expect(serviceElem).toHaveAttribute('id', testService.id)
    expect(within(serviceElem).getByRole('heading', { name: testService.title, level: 4 })).toBeInTheDocument()
    expect(within(serviceElem).getByRole('img', { hidden: true })).toBeInTheDocument()
  })
})
