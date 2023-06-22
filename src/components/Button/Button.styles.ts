import clsx from 'clsx'

const styles = (isFull?: boolean) =>
  clsx(
    'block min-w-[20rem] cursor-pointer select-none',
    'bg-gradient-120 from-transparent from-0% via-transparent via-50% to-50% bg-[length:250%]',
    'p-[1.6rem] text-2xl font-[500] uppercase transition-all duration-300',
    'hover:translate-x-4 hover:bg-[100%]',
    isFull ? 'bg-primary to-white text-white hover:text-primary' : 'bg-white to-primary text-primary hover:text-white',
    isFull && 'rounded-xl border border-solid border-primary text-center'
  )

export default styles
