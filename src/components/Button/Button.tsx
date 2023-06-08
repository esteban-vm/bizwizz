import type { FC } from '@/types'

type ButtonProps = {
  text: string
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button type='button' className='btn'>
      {text}
    </button>
  )
}

export default Button
