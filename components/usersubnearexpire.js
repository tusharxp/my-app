import React from "react";
import Image from "next/image";
import Ammountusersaved from "./savedamount";
import Discountoffercard from "./discountcard";
import Dealsquarecard from "./dealsquarecard";
import {user} from "../user"

function usersubnearexpire(props) {
  const{calculateRemainingDays}= props
  
  const expiryDate = `${user.user.subscription.end_date}`; 
  
  const remainingDays = calculateRemainingDays(expiryDate);
  


  return (
    <div className="relative flex flex-wrap items-center pt-12 pb-10 justify-evenly md:flex-nowrap bg-gradient-to-r from-red-400 to-rose-500 xl:px-28 2xl:px-52 justify-items-center ">
      <Image
        className="absolute hidden opacity-25 md:block mb-80 top-8 left-10"
        src="/percent.svg"
        height="20"
        width="60"
        alt=""
      ></Image>
      <div className="relative w-full text-center md:w-96 md:text-left md:pr-12 sm:text-center md:pl-10 xl:pl-0">
        <p className="py-1 pl-1 text-2xl text-white sm:text-center md:text-left">
          Expires in
        </p>
        <p className="mx-20 text-4xl font-bold tracking-wide text-white bg-red-400 rounded-full sm:mx-0 md:bg-transparent bg-opacity-60 lg:mx-0 md:text-6xl md:py-2 md:pl-1 ">
          {remainingDays} Days
        </p>

        <Image
          className="absolute opacity-25 md:block mb-80 -top-6 right-2"
          src="/percent.svg"
          height="20"
          width="40"
          alt=""
        />

        <div className="">
          <Ammountusersaved savedAmount={`${user.user.subscription.savings.total}`} divWidth={'sm:w-full'}/>
        </div>
      </div>

      <span className="xl:block hidden w-0.5 border-rose-50 h-96 border opacity-20 "></span>


      <div className="xl:mr-[33px]">
        <div className="flex px-2 text-center">
          <div className="m-1">
            <p className="pl-2 text-white ">
              You Saved <br />
              <span className="pl-2 text-4xl font-extrabold ">60%</span>
            </p>
          </div>
          <div className="ml-4">
            <p className="pt-5 text-white text-start">
              Lower compared to an average <br /> RED user.
            </p>
          </div>
        </div>

        <div className="grid ">
          <div className="grid mt-2 lg:mt-0">
            <div className="flex overflow-x-scroll no-scrollbar">
              <Dealsquarecard
                divImg={
                  <Image
                    src="/airplane.svg"
                    height="40"
                    width="25"
                    alt=""
                    className="p-1 mb-2 bg-pink-100 rounded-md"
                  />
                }
                savedAmount={`${user.user.subscription.savings.flight}`}
                divHight={"h-40"}
                divWidth={"w-40"}
                divBGColor={"bg-white"}
              />
              <Dealsquarecard
                divImg={
                  <Image
                    src="/hotel.svg"
                    height="40"
                    width="25"
                    alt=""
                    className="p-1 mb-2 bg-pink-100 rounded-md"
                  />
                }
                savedAmount={`${user.user.subscription.savings.hotel}`}
                divHight={"h-40"}
                divWidth={"w-40"}
                divBGColor={"bg-white"}
              />
              <Dealsquarecard
                divImg={
                  <Image
                    src="/holiday.svg"
                    height="40"
                    width="25"
                    alt=""
                    className="p-1 mb-2 bg-pink-100 rounded-md"
                  />
                }
                savedAmount={`${user.user.subscription.savings.holiday}`}
                divHight={"h-40"}
                divWidth={"w-40"}
                divBGColor={"bg-white"}
              />
            </div>
          </div>
          <Discountoffercard
            divBtn={"Book Now"}
            divBottom={" On Flights, Hotels and Holidays free"}
            divTop={"Enjoy your benifits of"}
            divCenter={"Additional Discount"}
            divBGColor={"bg-red-400"}
            divImg={
              <Image src={"/clock.svg"} height={90} width={90} alt="clock" />
            }
          />
        </div>
      </div>
      <Image
        className="absolute hidden opacity-25 md:hidden xl:block mt-80 top-8 right-10"
        src="/percent.svg"
        height="40"
        width="132"
        alt=""
      ></Image>
    </div>
  );
}

export default usersubnearexpire;
