import clsx from 'clsx'

const styles = {
  wrapper: clsx(
    'relative h-96 w-96 select-none rounded-full border-[3px] border-solid border-primary bg-cover bg-center',
    "first:bg-[url('/images/team-mate-1.jpg')] last:bg-[url('/images/team-mate-3.jpg')] even:bg-[url('/images/team-mate-2.jpg')]",
    '[&>div:last-child]:hover:top-1/2 [&>div]:hover:opacity-100'
  ),
  overlay: clsx(
    'absolute left-0 top-0 h-full w-full rounded-full bg-primary/70',
    'opacity-0 transition-opacity duration-200'
  ),
  content: clsx(
    'absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-all duration-500'
  ),
  name: clsx('text-[2.7rem] font-semibold'),
  designation: clsx('text-2xl font-medium'),
  links: clsx('mt-8 flex justify-between'),
  icon: clsx('m-[2.6px] h-12 w-12 fill-white hover:fill-primary-light'),
}

export default styles
