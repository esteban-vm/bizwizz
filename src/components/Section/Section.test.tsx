import { render, cleanup, within, screen } from '@/tests'
import Section from './Section'

describe('Section:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(
      <Section bg='black' id='test' subtitle='Lorem ipsum' title='Test'>
        <article>Child element</article>
      </Section>
    ))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const title = /Test/
    const subtitle = /Lorem ipsum/
    const sectionElem = screen.getByRole('region')
    expect(sectionElem).toBeInTheDocument()
    expect(sectionElem).toHaveAccessibleName(title)
    expect(sectionElem).toHaveAttribute('id', 'test')
    expect(within(sectionElem).getByRole('presentation', { hidden: true })).toBeInTheDocument()
    expect(within(sectionElem).getByRole('heading', { name: title, level: 2 })).toBeInTheDocument()
    expect(within(sectionElem).getByRole('heading', { name: subtitle, level: 3 })).toBeInTheDocument()
    expect(within(sectionElem).getByRole('article')).toBeInTheDocument()
    expect(within(sectionElem).getByRole('article')).toHaveTextContent(/child element/i)
  })
})
