import clsx from 'clsx'

const styles = {
  wrapper: clsx(
    'flex w-80 flex-[1_1_100%] items-center justify-center',
    'overflow-hidden bg-lightgrey text-black',
    'hover:bg-primary hover:text-white',
    'pointer-coarse:bg-primary pointer-coarse:text-white',
    'lg:flex-[1_1_30%] [&>h4]:hover:translate-x-20',
    '[&>svg]:hover:scale-150 [&>svg]:hover:opacity-60',
    '[&>svg]:pointer-coarse:scale-100 [&>svg]:pointer-coarse:opacity-60'
  ),
  icon: clsx('mr-7 h-44 w-[4.8rem] scale-50 fill-primary-light opacity-0 transition-all duration-500'),
  title: clsx('select-none p-[3rem_6rem_3rem_0] text-[2.3rem] font-[500] transition-all duration-500'),
}

export default styles
