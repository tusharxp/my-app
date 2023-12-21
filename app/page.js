import Expired from '@/components/Expired'
import First from '@/components/First'
import Forth from '@/components/Forth'
import Nearexpire from '@/components/Nearexpire'
import Second from '@/components/Second'
import Offerforyou from '@/components/Offerforyou'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* <Navbar /> */}
      <First />
      <Second />
      <Nearexpire />
      <Expired />
      <Offerforyou />
      <Forth />
    </main>
  )
}
