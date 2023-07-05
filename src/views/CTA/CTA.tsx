import type { FC, SocialLinkProps } from '@/types'
import { Button, SocialLink, Wave } from '@/components'
import styles from './CTA.styles'

const socialLinks: SocialLinkProps[] = [
  { id: 'c10f7e60-6e36-498f-9a72-7b481133a14f', to: 'facebook', className: 'social_link cta' },
  { id: 'dc35c092-25ed-4754-8743-f4d9cd982004', to: 'twitter', className: 'social_link cta' },
  { id: '5780b1a7-ea08-4bf7-9076-685e21e4483a', to: 'linkedin', className: 'social_link cta' },
]

const CTA: FC = () => {
  return (
    <>
      <Wave color='white' />
      <section aria-labelledby='cta_title' className={styles.wrapper} id='call-to-action'>
        <div className={styles.links}>
          {socialLinks.map((link) => (
            <SocialLink key={link.id} {...link} />
          ))}
        </div>
        <h2 className={styles.title} id='cta_title'>
          Let&apos;s Talk
        </h2>
        <Button />
      </section>
    </>
  )
}

export default CTA
