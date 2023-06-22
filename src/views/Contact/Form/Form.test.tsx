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
    const formElem = screen.getByRole('form')
    const [nameField, emailField, subjectField, messageField] = within(formElem).getAllByRole('textbox')
    const mockValue = 'test'
    await userEvent.type(nameField, mockValue)
    await userEvent.type(emailField, mockValue)
    await userEvent.type(subjectField, mockValue)
    await userEvent.type(messageField, mockValue)
    await userEvent.click(within(formElem).getByRole('button', { name: /send message/i }))
    expect(await within(formElem).findByText(/name must be at least 5 characters long/i)).toBeInTheDocument()
    expect(await within(formElem).findByText(/email must be valid/i)).toBeInTheDocument()
    expect(await within(formElem).findByText(/subject must be at least 5 characters long/i)).toBeInTheDocument()
    expect(await within(formElem).findByText(/message must be at least 10 characters long/i)).toBeInTheDocument()
  })

  it('should be submitted successfully', async () => {
    const formElem = screen.getByRole('form')
    const [nameField, emailField, subjectField, messageField] = within(formElem).getAllByRole('textbox')
    const mockName = 'John Doe'
    const mockEmail = 'test@example.com'
    const mockSubject = 'testing'
    const mockMessage = 'hello world'
    await userEvent.type(nameField, mockName)
    await userEvent.type(emailField, mockEmail)
    await userEvent.type(subjectField, mockSubject)
    await userEvent.type(messageField, mockMessage)
    await userEvent.click(within(formElem).getByRole('button', { name: /send message/i }))
    const alert = await screen.findByRole('alert')
    expect(alert).toBeInTheDocument()
    expect(within(alert).getByRole('heading', { name: /thank you for contacting us!/i, level: 4 })).toBeInTheDocument()
    expect(within(alert).getByText((_, elem) => elem?.textContent === `name: ${mockName}`)).toBeInTheDocument()
    expect(within(alert).getByText((_, elem) => elem?.textContent === `email: ${mockEmail}`)).toBeInTheDocument()
    expect(within(alert).getByText((_, elem) => elem?.textContent === `subject: ${mockSubject}`)).toBeInTheDocument()
    expect(within(alert).getByText((_, elem) => elem?.textContent === `message: ${mockMessage}`)).toBeInTheDocument()
  })
})
