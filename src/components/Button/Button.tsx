import type { FC } from '@/types'
import styles from './Button.styles'

type ButtonProps = {
  text?: string
  isSubmit?: boolean
}

const Button: FC<ButtonProps> = ({ text, isSubmit }) => {
  return (
    <button className={styles(isSubmit)} type={isSubmit ? 'submit' : 'button'}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: 'Get a quote today',
}

export default Button
