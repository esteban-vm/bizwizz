import type { FC, ID, IconName } from '@/types'
import { Icon } from '@/components'

export type ServiceProps = {
  id: ID
  title: Capitalize<string>
  icon: IconName
}

const Service: FC<ServiceProps> = ({ id, title, icon }) => {
  return (
    <article id={id} className='service'>
      <Icon name={icon} className='service_icon' />
      <h4 className='service_heading'>{title}</h4>
    </article>
  )
}

export default Service
