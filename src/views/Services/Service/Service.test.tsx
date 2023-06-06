import { render, cleanup, within, screen } from '@/tests'
import { services } from '../Services'
import Service from './Service'

describe('Service:', () => {
  let asFragment: () => DocumentFragment
  const [testService] = services

  beforeEach(() => {
    void ({ asFragment } = render(<Service {...testService} />))
  })

  afterEach(cleanup)

  it('should match snapshot', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const service = screen.getByRole('article')
    expect(service).toBeInTheDocument()
    expect(within(service).getByRole('img')).toBeInTheDocument()
    expect(within(service).getByRole('heading', { name: testService.title, level: 4 })).toBeInTheDocument()
  })
})
