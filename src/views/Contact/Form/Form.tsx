'use client'
import type { FC } from '@/types'
import { useForm, type SubmitHandler } from 'react-hook-form'
import cogoToast from 'cogo-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components'
import styles from './Form.styles'

const validationSchema = z.object({
  name: z.string().trim().min(5, 'Name must be at least 5 characters long'),
  email: z.string().trim().email('Email must be valid'),
  subject: z.string().trim().min(5, 'Subject must be at least 5 characters long'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters long'),
})

type FormValues = z.infer<typeof validationSchema>

const Form: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
    resetOptions: { keepTouched: false, keepDirty: false, keepErrors: false },
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    reset()

    await cogoToast.success(
      <div className={styles.toast}>
        {Object.entries(data).map(([key, value], index) => (
          <p key={index}>
            <strong>{key}:</strong> {value}
          </p>
        ))}
      </div>,
      { heading: 'Thank you for contacting us!', hideAfter: 5, role: 'alert' }
    )
  }

  return (
    <>
      <h3 id='contact_form_heading'>Shoot Us a Message</h3>
      <div>
        <form aria-labelledby='contact_form_heading' onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles.groups}>
            <div className={styles.half_group}>
              <input
                autoCorrect='off'
                className={styles.input}
                id='name'
                maxLength={30}
                minLength={5}
                placeholder='Your name'
                spellCheck={false}
                type='text'
                {...register('name')}
              />
              {errors.name && <small className={styles.feedback}>{errors.name.message}</small>}
            </div>
            <div className={styles.half_group}>
              <input
                className={styles.input}
                id='email'
                placeholder='Your email address'
                type='email'
                {...register('email')}
              />
              {errors.email && <small className={styles.feedback}>{errors.email.message}</small>}
            </div>
          </div>
          <div className={styles.group}>
            <input
              className={styles.input}
              id='subject'
              maxLength={100}
              minLength={5}
              placeholder='Subject'
              type='text'
              {...register('subject')}
            />
            {errors.subject && <small className={styles.feedback}>{errors.subject.message}</small>}
          </div>
          <div className={styles.group}>
            <textarea
              className={styles.textarea}
              id='message'
              maxLength={500}
              minLength={10}
              placeholder='Your message'
              {...register('message')}
            />
            {errors.message && <small className={styles.feedback}>{errors.message.message}</small>}
          </div>
          <Button text='Send message' isSubmit />
        </form>
      </div>
    </>
  )
}

export default Form
