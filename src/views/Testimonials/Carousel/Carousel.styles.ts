import clsx from 'clsx'

const styles = {
  wrapper: clsx('flex flex-col overflow-hidden'),
  radio: clsx('checked-labels:bg-primary'),
  label: clsx('m-[1.6rem] block h-5 w-5 cursor-pointer rounded-full border-2 border-solid border-primary bg-white'),
  label_container: clsx('order-1 flex justify-center'),
  slide: clsx('flex w-[300%]'),
}

export default styles
