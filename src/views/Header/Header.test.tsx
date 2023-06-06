import { render, cleanup, within, screen } from '@/tests'
import Header from './Header'

describe('Header:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Header />))
  })

  afterEach(cleanup)

  it('should match snapshot', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    expect(within(header).getByRole('img')).toBeInTheDocument()
    expect(within(header).getByRole('navigation')).toBeInTheDocument()
    expect(within(header).getByRole('list')).toBeInTheDocument()
    expect(within(header).getByRole('heading', { name: /bizwizz/i, level: 1 })).toBeInTheDocument()
    expect(within(header).getByRole('heading', { name: /innovate, transform and lead/i, level: 2 })).toBeInTheDocument()
    expect(within(header).getByRole('button', { name: /get a quote today/i })).toBeInTheDocument()
  })
})
