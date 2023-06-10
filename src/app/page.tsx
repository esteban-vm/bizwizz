import { Icons } from '@/components'
import { Header, Portfolio, Services, Team } from '@/views'

export default function Home() {
  return (
    <>
      <Icons />
      <Header />
      <main>
        <Services />
        <Team />
        <Portfolio />
      </main>
    </>
  )
}
