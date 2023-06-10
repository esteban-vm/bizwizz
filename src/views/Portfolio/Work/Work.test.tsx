import { render, cleanup, within, screen } from '@/tests'
import { works } from '../Portfolio'
import Work from './Work'

describe('Work:', () => {
  let asFragment: () => DocumentFragment
  const [testWork] = works

  beforeEach(() => {
    void ({ asFragment } = render(<Work {...testWork} />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const teamMateElem = screen.getByRole('article')
    expect(teamMateElem).toBeInTheDocument()
    expect(teamMateElem).toHaveAttribute('id', testWork.id)
    expect(within(teamMateElem).getByRole('img')).toBeInTheDocument()
  })
})
