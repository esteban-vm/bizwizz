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
    const title = /meet our team/i
    const subtitle = /lorem ipsum dolor sit amet/i
    const teamElem = screen.getByRole('region')
    expect(teamElem).toBeInTheDocument()
    expect(teamElem).toHaveAccessibleName(title)
    expect(teamElem).toHaveAttribute('id', 'team')
    expect(within(teamElem).getByRole('presentation', { hidden: true })).toBeInTheDocument()
    expect(within(teamElem).getByRole('heading', { name: title, level: 2 })).toBeInTheDocument()
    expect(within(teamElem).getByRole('heading', { name: subtitle, level: 3 })).toBeInTheDocument()
    expect(within(teamElem).getAllByRole('article')).toHaveLength(teamMates.length)
  })
})
