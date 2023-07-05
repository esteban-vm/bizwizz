import clsx from 'clsx'

const styles = {
  wrapper: clsx('flex flex-row flex-wrap'),
  column: clsx(
    'm-3 rounded-md bg-lightgrey-2 p-[1.6rem_3rem] text-left text-[1.6rem] text-black',
    'first:flex first:basis-full first:flex-col first:justify-evenly last:basis-full',
    'lg:m-[0.8rem_auto] first:lg:basis-[30%] last:lg:basis-[65%]',
    '[&>h3]:text-4xl [&>h3]:font-semibold [&>p]:first:mt-8'
  ),
}

export default styles
