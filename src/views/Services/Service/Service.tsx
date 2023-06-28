import type { FC, UUID, IconName } from '@/types'
import { Icon } from '@/components'
import styles from './Service.styles'

export interface ServiceProps {
  id: UUID
  title: Capitalize<string>
  icon: IconName
}

const Service: FC<ServiceProps> = ({ title, icon, ...props }) => {
  return (
    <article className={styles.wrapper} {...props}>
      <Icon className={styles.icon} name={icon} />
      <h4 className={styles.heading}>{title}</h4>
    </article>
  )
}

export default Service
