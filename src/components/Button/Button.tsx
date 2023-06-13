import type { FC } from '@/types'
import styles from './Button.styles'

type ButtonProps = {
  text: string
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className={styles} type='button'>
      {text}
    </button>
  )
}

export default Button
