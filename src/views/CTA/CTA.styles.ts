import clsx from 'clsx'

const styles = {
  wrapper: clsx('flex w-full flex-row items-center justify-around bg-black p-12'),
  links: clsx('mr-3 flex'),
  link: clsx(
    'm-3 block h-[4.5rem] w-[4.5rem] translate-y-0 rounded-full',
    'border-2 border-solid border-primary fill-white p-5 transition-all duration-500',
    'hover:-translate-y-3 hover:fill-primary'
  ),
  title: clsx('text-[4rem] font-semibold text-white'),
  btn_container: clsx(''),
}

export default styles
