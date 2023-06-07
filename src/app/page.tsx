import { Icons } from '@/components'
import { Header, Services, Team } from '@/views'

export default function Home() {
  return (
    <>
      <Icons />
      <Header />
      <main>
        <Services />
        <Team />
      </main>
    </>
  )
}
