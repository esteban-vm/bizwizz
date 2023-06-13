import type { FC, ID, IconName } from '@/types'
import { Icon } from '@/components'
import styles from './Service.styles'

export type ServiceProps = {
  id: ID
  title: Capitalize<string>
  icon: IconName
}

const Service: FC<ServiceProps> = ({ id, title, icon }) => {
  return (
    <article className={styles.wrapper} id={id}>
      <Icon className={styles.icon} name={icon} />
      <h4 className={styles.heading}>{title}</h4>
    </article>
  )
}

export default Service
