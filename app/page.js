"use client";
import Usersubexpired from "@/components/usersubexpired";
import Firstsection from "@/components/firstsection";
import Lastsectiom from "@/components/lastsectiom";
import Usersubnearexpire from "@/components/usersubnearexpire";
import Usersubnormalui from "@/components/usersubnormalui";
import Offerforuser from "@/components/offerforuser";
import {user} from "../user"

export default function Home() {
  function calculateRemainingDays(expiryDate) {
    const expiryDateObject = new Date(expiryDate);
  
    const currentDate = new Date();
  
    const timeDifference = expiryDateObject.getTime() - currentDate.getTime();
  
    const remainingDays = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));
  
    return remainingDays;
  }
  
  const expiryDate = `${user.user.subscription.end_date}`; 
  
  const remainingDays = calculateRemainingDays(expiryDate);
  
  

  function switchBetweenTwoConditions(plan) {
    if(plan=== ""){
          return 1;
    }
    else if(remainingDays> 0){
      return 2;
    }else{
      return 3;
    }
  }

  const value=switchBetweenTwoConditions(user?.user?.subscription?.plan_name)

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Firstsection />
      {value===1 && <Usersubnormalui />}
      {value===2 &&<Usersubnearexpire calculateRemainingDays={calculateRemainingDays}/>}
      {value===3 && <Usersubexpired />}
      <Offerforuser />
      <Lastsectiom />
    </main>
  );
}
