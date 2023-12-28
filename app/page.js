"use client";
import Usersubexpired from "@/components/usersubexpired";
import Firstsection from "@/components/firstsection";
import Lastsectiom from "@/components/lastsectiom";
import Usersubnearexpire from "@/components/usersubnearexpire";
import Usersubnormalui from "@/components/usersubnormalui";
import Offerforuser from "@/components/offerforuser";

export default function Home() {
  function switchBetweenTwoConditions(condition) {
    switch (condition) {
      case "1":
        return 1;
      case "2":
        return 2;
      default:
        return 3;
    }
  }

  const value=switchBetweenTwoConditions("3")

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Firstsection />
      {value===1 && <Usersubnormalui />}
      {value===2 &&<Usersubnearexpire />}
      {value===3 && <Usersubexpired />}
      <Offerforuser />
      <Lastsectiom />
    </main>
  );
}
