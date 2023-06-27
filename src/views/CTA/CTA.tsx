import type { FC } from '@/types'
import { Button, SocialLink, Wave } from '@/components'
import styles from './CTA.styles'

const CTA: FC = () => {
  return (
    <>
      <Wave color='white' />
      <section aria-labelledby='cta_title' className={styles.wrapper} id='call-to-action'>
        <div className={styles.links}>
          <SocialLink link='facebook' />
          <SocialLink link='twitter' />
          <SocialLink link='linkedin' />
        </div>
        <div className={styles.cta}>
          <h2 id='cta_title'>Let&apos;s Talk</h2>
        </div>
        <div className={styles.btn}>
          <Button />
        </div>
      </section>
    </>
  )
}

export default CTA
