import { render, cleanup, within, screen } from '@/tests'
import { teamMates } from '../Team'
import TeamMate from './TeamMate'

describe('Team Mate:', () => {
  let asFragment: () => DocumentFragment
  const [testTeamMate] = teamMates

  beforeEach(() => {
    void ({ asFragment } = render(<TeamMate {...testTeamMate} />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const teamMateElem = screen.getByRole('article')
    expect(teamMateElem).toBeInTheDocument()
    expect(teamMateElem).toHaveAttribute('id', testTeamMate.id)
    expect(within(teamMateElem).getByRole('heading', { name: testTeamMate.name, level: 4 })).toBeInTheDocument()
    expect(within(teamMateElem).getByText(testTeamMate.designation)).toBeInTheDocument()
    expect(within(teamMateElem).getByRole('link', { description: /facebook/i })).toBeInTheDocument()
    expect(within(teamMateElem).getByRole('link', { description: /twitter/i })).toBeInTheDocument()
    expect(within(teamMateElem).getByRole('link', { description: /linkedin/i })).toBeInTheDocument()
  })
})
