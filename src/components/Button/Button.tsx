import type { FC } from '@/types'
import styles from './Button.styles'

interface ButtonProps {
  text: string
  isSubmit: boolean
  onClick: () => void
}

const Button: FC<Partial<ButtonProps>> = ({ text = 'Get a quote today', isSubmit, onClick }) => {
  return (
    <button className={styles(isSubmit)} onClick={isSubmit ? undefined : onClick} type={isSubmit ? 'submit' : 'button'}>
      {text}
    </button>
  )
}

export default Button
