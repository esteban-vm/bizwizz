import clsx from 'clsx'

const styles = {
  outer_wrapper: clsx('flex flex-row items-center justify-between gap-6'),
  inner_wrapper: clsx('flex flex-col overflow-hidden'),
  radio: clsx(
    'hidden carousel-check:bg-primary',
    'carousel-slide-2:translate-x-[calc(-100%/3)] carousel-slide-3:translate-x-[calc(-100%*2/3)]'
  ),
  icon: clsx('cursor-pointer select-none fill-primary hover:opacity-80 active:scale-90'),
  label: clsx('m-[1.6rem] block h-5 w-5 cursor-pointer rounded-full border-2 border-solid border-primary bg-white'),
  label_container: clsx('order-1 flex justify-center'),
  slider: clsx('flex w-[300%] transition-all duration-500'),
}

export default styles
