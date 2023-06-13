import { render, cleanup, within, screen } from '@/tests'
import Portfolio from './Portfolio'
import works from './Portfolio.data'

describe('Portfolio:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Portfolio />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const title = /our popular projects/i
    const subtitle = /lorem ipsum dolor sit amet/i
    const portfolioElem = screen.getByRole('region')
    expect(portfolioElem).toBeInTheDocument()
    expect(portfolioElem).toHaveAccessibleName(title)
    expect(portfolioElem).toHaveAttribute('id', 'portfolio')
    expect(within(portfolioElem).getByRole('presentation', { hidden: true })).toBeInTheDocument()
    expect(within(portfolioElem).getByRole('heading', { name: title, level: 2 })).toBeInTheDocument()
    expect(within(portfolioElem).getByRole('heading', { name: subtitle, level: 3 })).toBeInTheDocument()
    expect(within(portfolioElem).getAllByRole('article')).toHaveLength(works.length)
  })
})
