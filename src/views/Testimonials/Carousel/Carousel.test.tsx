import { render, cleanup, within, screen } from '@/tests'
import Carousel from './Carousel'

describe('Carousel:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Carousel />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const carouselElem = screen.getByRole('group')
    expect(carouselElem).toBeInTheDocument()
    const [leftBtn, rightBtn] = within(carouselElem).getAllByRole('img')
    expect(leftBtn).toBeInTheDocument()
    expect(rightBtn).toBeInTheDocument()
    const [radioBtn1, radioBtn2, radioBtn3] = within(carouselElem).getAllByRole('radio')
    expect(radioBtn1).toBeInTheDocument()
    expect(radioBtn1).toBeChecked()
    expect(radioBtn2).toBeInTheDocument()
    expect(radioBtn3).toBeInTheDocument()
  })
})
