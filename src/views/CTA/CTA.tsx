import type { FC } from '@/types'
import { Button, SocialLink, Wave } from '@/components'
import styles from './CTA.styles'

const CTA: FC = () => {
  return (
    <>
      <Wave color='white' />
      <section aria-labelledby='cta_title' className={styles.wrapper} id='call-to-action'>
        <div className={styles.links}>
          <SocialLink className={styles.link} to='facebook' />
          <SocialLink className={styles.link} to='twitter' />
          <SocialLink className={styles.link} to='linkedin' />
        </div>
        <div>
          <h2 className={styles.title} id='cta_title'>
            Let&apos;s Talk
          </h2>
        </div>
        <div className={styles.btn_container}>
          <Button />
        </div>
      </section>
    </>
  )
}

export default CTA
