import type { FC } from '@/types'

type ButtonProps = {
  text: string
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button
      type='button'
      className={`
        block
        min-w-[20rem]
        cursor-pointer
        select-none
        bg-white
        bg-gradient-120
        from-transparent
        from-0%
        via-transparent
        via-50%
        to-primary
        to-50%
        bg-[length:250%]
        p-[1.6rem]
        text-2xl
        font-[500]
        uppercase
        text-primary
        transition-all
        duration-300
        hover:translate-x-4
        hover:bg-[100%]
        hover:text-white
      `}
    >
      {text}
    </button>
  )
}

export default Button
