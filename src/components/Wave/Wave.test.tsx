import { render, cleanup } from '@/tests'
import Wave from './Wave'

describe('Wave:', () => {
  afterEach(cleanup)

  it('should render correctly when is primary', () => {
    const { asFragment } = render(<Wave color='primary' />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly when is black', () => {
    const { asFragment } = render(<Wave color='black' />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('should render correctly when is white', () => {
    const { asFragment } = render(<Wave color='white' />)
    expect(asFragment()).toMatchSnapshot()
  })
})
