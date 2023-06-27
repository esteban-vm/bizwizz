import type { FC } from '@/types'
import styles from './Button.styles'

type ButtonProps = {
  text?: string
  isSubmit?: boolean
}

const Button: FC<ButtonProps> = ({ text = 'Get a quote today', isSubmit }) => {
  return (
    <button className={styles(isSubmit)} type={isSubmit ? 'submit' : 'button'}>
      {text}
    </button>
  )
}

export default Button
