import type { FC, UUID, IconName } from '@/types'
import { Icon } from '@/components'
import styles from './Info.styles'

export interface InfoProps {
  id: UUID
  detail: { subject: Capitalize<string>; content: string }
  icon: IconName
}

const Info: FC<InfoProps> = ({ id, detail, icon }) => {
  return (
    <article className={styles.wrapper} id={id}>
      <div className={styles.icon_container}>
        <Icon className={styles.icon} name={icon} />
      </div>
      <div className={styles.detail}>
        <p className={styles.paragraph}>{detail.subject}</p>
        <p className={styles.paragraph}>{detail.content}</p>
      </div>
    </article>
  )
}

export default Info
