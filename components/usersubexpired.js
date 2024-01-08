import React from "react";
import Image from "next/image";
import Ammountusersaved from "./savedamount";
import Dealsquarecard from "./dealsquarecard";
import Discountoffercard from "./discountoffercard";
import {user} from "../user"

function usersubexpired() {
  return (
    <div className="relative flex flex-wrap items-center w-full pt-12 pb-10 justify-evenly md:flex-nowrap bg-gradient-to-r from-red-400 to-rose-500 xl:px-28 2xl:px-52 justify-items-center ">
      <Image
        className="absolute hidden opacity-25 md:block top-8 left-10"
        src="/percent.svg"
        height="20"
        width="60"
        alt=""
      ></Image>
      <div className="relative w-full text-center md:w-96 md:text-left md:pr-12 md:pl-8 xl:pl-0">
        <p className="py-1 pl-1 text-2xl text-white">Your plan has</p>
        <p className="py-2 pl-1 text-4xl font-bold tracking-wider text-white bg-red-400 rounded-full px- md:text-6xl md:bg-transparent bg-opacity-60 md:px-0">
          EXPIRED
        </p>
        <Image
          className="absolute opacity-25 md:block mb-80 -top-6 -right-2"
          src="/percent.svg"
          height="20"
          width="40"
          alt=""
        ></Image>

        <div className="">
          <Ammountusersaved savedAmount={`${user.user.subscription.savings.total}`} />
        </div>
        
      </div>
      
      <span className="xl:block hidden w-0.5 border-rose-50 h-96 border opacity-20 "></span>

      <div className="grid xl:mr-[33px] lg:ml-[0px] 2xl:ml-0">
        <div className="grid pl-2 mt-2 md:mt-0 md:pl-0">
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
          divBGColor={"bg-red-400"}
          divTop={"Renew now to get an"}
          divCenter={"Additional Month"}
          divBottom={"for free"}
          divBtn={"Redeem Now"}
          divImg={
            <Image
              src={"/calendar.svg"}
              height={60}
              width={60}
              alt="calendar"
            />
          }
        />
      </div>
      <Image
        className="absolute hidden opacity-25 md:hidden xl:block mt-80 w-top-8 right-10"
        src="/percent.svg"
        height="20"
        width="132"
        alt=""
      ></Image>
    </div>
  );
}

export default usersubexpired;
