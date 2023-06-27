import clsx from 'clsx'

const styles = (isSubmit?: boolean) => {
  return clsx(
    'block min-w-[20rem] cursor-pointer select-none',
    'bg-gradient-120 from-transparent from-0% via-transparent via-50% to-50% bg-[length:250%]',
    'p-[1.6rem] text-2xl font-[500] uppercase transition-all duration-300',
    'hover:translate-x-4 hover:bg-[100%]',
    isSubmit
      ? 'rounded-xl border border-solid border-primary bg-primary to-white text-white hover:text-primary'
      : 'bg-white to-primary text-primary hover:text-white'
  )
}

export default styles
