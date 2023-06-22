import clsx from 'clsx'

const styles = {
  groups: clsx('my-6 flex justify-between'),
  half_group: clsx('basis-[48%]'),
  group: clsx('my-6 w-full'),
  feedback: clsx('mt-0 text-darkgrey-2'),
  input: clsx('form-field'),
  textarea: clsx('form-field h-80 resize-none'),
  toast: clsx('text-primary [&_strong]:capitalize'),
}

export default styles
