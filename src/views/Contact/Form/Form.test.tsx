import { render, cleanup, within, screen, userEvent } from '@/tests'
import Form from './Form'

describe('Form:', () => {
  let asFragment: () => DocumentFragment

  beforeEach(() => {
    void ({ asFragment } = render(<Form />))
  })

  afterEach(cleanup)

  it('should render correctly', () => {
    expect(asFragment()).toMatchSnapshot()
  })

  it('should have correct structure', () => {
    const title = /shoot us a message/i
    const formElem = screen.getByRole('form')
    expect(formElem).toBeInTheDocument()
    expect(formElem).toHaveAccessibleName(title)
    expect(within(formElem).getAllByRole('textbox')).toHaveLength(4)
    expect(within(formElem).getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('should validate input fields', async () => {
    const [nameField, emailField, subjectField, messageField] = screen.getAllByRole('textbox')
    await userEvent.type(nameField, 'test')
    await userEvent.type(emailField, 'test')
    await userEvent.type(subjectField, 'test')
    await userEvent.type(messageField, 'test')
    await userEvent.click(screen.getByRole('button', { name: /send message/i }))
    expect(await screen.findByText(/name must be at least 5 characters long/i)).toBeInTheDocument()
    expect(await screen.findByText(/email must be valid/i)).toBeInTheDocument()
    expect(await screen.findByText(/subject must be at least 5 characters long/i)).toBeInTheDocument()
    expect(await screen.findByText(/message must be at least 10 characters long/i)).toBeInTheDocument()
  })
})
