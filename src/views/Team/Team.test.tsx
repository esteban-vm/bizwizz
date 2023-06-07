import { render, cleanup, within, screen } from '@/tests'
import Team, { teamMates } from './Team'

describe('Team:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Team />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const teamElem = screen.getByRole('region')
    expect(teamElem).toBeInTheDocument()
    expect(within(teamElem).getByRole('heading', { name: /meet our team/i, level: 2 })).toBeInTheDocument()
    expect(within(teamElem).getAllByRole('article')).toHaveLength(teamMates.length)
  })
})
