import { render, cleanup, within, screen } from '@/tests'
import Wrapper from './Wrapper'

describe('Wrapper:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(
      <Wrapper title='Testing title' subtitle='Testing subtitle' label='test' light>
        <article>A child component</article>
      </Wrapper>
    ))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const wrapperElem = screen.getByRole('region')
    expect(wrapperElem).toBeInTheDocument()
    expect(wrapperElem).toHaveAttribute('id', 'test')
    const titleElem = within(wrapperElem).getByRole('heading', { name: /testing title/i, level: 2 })
    expect(titleElem).toBeInTheDocument()
    expect(titleElem).toHaveAttribute('id', 'test_title')
    expect(within(wrapperElem).getByRole('heading', { name: /testing subtitle/i, level: 3 })).toBeInTheDocument()
  })
})
