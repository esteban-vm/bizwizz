import type { FC } from '@/types'
import clsx from 'clsx'

interface ButtonProps {
  text: string
  isSubmit: boolean
  onClick: () => void
}

const Button: FC<Partial<ButtonProps>> = ({ text = 'Get a quote today', isSubmit, onClick }) => {
  return (
    <button
      className={clsx('button', isSubmit && 'submit')}
      onClick={isSubmit ? undefined : onClick}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  )
}

export default Button
