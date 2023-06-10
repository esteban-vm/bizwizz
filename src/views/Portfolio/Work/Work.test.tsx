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
    const workElem = screen.getByRole('article')
    expect(workElem).toBeInTheDocument()
    expect(workElem).toHaveAttribute('id', testWork.id)
    expect(within(workElem).getByRole('img')).toBeInTheDocument()
  })
})
