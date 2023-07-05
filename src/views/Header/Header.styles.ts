import clsx from 'clsx'

const styles = {
  wrapper: clsx(
    'relative h-[100vh] w-full',
    'bg-black bg-[url(/images/header-img.jpg)] bg-[length:40%] bg-[90%_50%] bg-no-repeat'
  ),
  navigation: clsx('-mt-20 flex justify-between'),
  image: clsx('h-[12rem] w-auto select-none'),
  links: clsx('m-[5rem_2rem_0_0] flex list-none'),
  titles: clsx('absolute left-32 top-1/2 -translate-y-1/2 text-left font-[500]'),
  title: clsx('text-[6rem] text-primary'),
  subtitle: clsx('mb-12 w-1/2 text-[5rem] text-white'),
}

export default styles
