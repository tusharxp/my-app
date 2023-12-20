import Expired from '@/components/Expired'
import First from '@/components/First'
import Forth from '@/components/Forth'
import Nearexpire from '@/components/Nearexpire'
import Rectanglecard from '@/components/Rectanglecard'
import Second from '@/components/Second'
import Squarecard from '@/components/Squarecard'
import Third from '@/components/Third'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* <Navbar /> */}
      <First />
      <Second />
      <Nearexpire />
      <Expired />
      <Third />
      <Forth />
      <div>
        
      </div>
      <Rectanglecard/>
      <Rectanglecard/>
      <Squarecard/>
    </main>
  )
}
