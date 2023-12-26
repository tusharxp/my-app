import Usersubexpired from '@/components/usersubexpired'
import Firstsection from '@/components/firstsection'
import Lastsectiom from '@/components/lastsectiom'
import Usersubnearexpire from '@/components/usersubnearexpire'
import Usersubnormalui from '@/components/usersubnormalui'
import Offerforuser from '@/components/offerforuser'

export default function Home() {

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Firstsection />
      <Usersubnormalui />
      <Usersubnearexpire />
      <Usersubexpired/>
      <Offerforuser />
      <Lastsectiom />
    </main>
  )
}
