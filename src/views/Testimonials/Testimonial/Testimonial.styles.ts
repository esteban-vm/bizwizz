import clsx from 'clsx'

const styles = {
  wrapper: clsx(
    'm-[3rem_0] flex h-[40rem] w-full flex-col items-start justify-evenly',
    'border-[3px] border-solid border-darkgrey-2 bg-darkgrey-2 p-16 text-left',
    'hover:border-primary'
  ),
  icon: clsx('h-6 w-6 fill-yellow'),
  icon_container: clsx('flex flex-row'),
  content: clsx('text-3xl text-lightgrey'),
  client: clsx('flex items-center gap-10'),
  client_data: clsx('text-2xl'),
  photo: clsx('h-full select-none'),
  photo_container: clsx('h-32 w-32 overflow-hidden rounded-full'),
  name: clsx('font-extrabold text-white'),
  designation: clsx('font-medium text-primary'),
}

export default styles
