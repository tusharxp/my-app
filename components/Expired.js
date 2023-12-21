import React from "react";
import Image from "next/image";
import Yousavedcard from "./Yousavedcard";
import Statusoffercard from "./Statusoffercard";
import Offersquarecard from "./Offersquarecard";

function Expired() {
  return (
    <div className="relative flex flex-wrap items-center justify-around w-full pt-12 pb-10 md:flex-nowrap bg-gradient-to-r from-red-400 to-rose-600 xl:px-64 justify-items-center ">
      <Image
        className="absolute hidden opacity-25 md:block top-8 left-10"
        src="/percent.svg"
        height="20"
        width="60"
        alt=""
      ></Image>
      <div className="relative text-center md:text-left md:pr-12 md:pl-10 xl:pl-0">
        <p className="py-1 pl-1 text-2xl text-white">Your plan has</p>
        <p className="px-2 py-2 pl-1 text-5xl font-bold tracking-wider text-white bg-red-400 rounded-full md:text-6xl md:bg-transparent bg-opacity-60 md:px-0">
          EXPIRED
        </p>
        <Image
          className="absolute opacity-25 md:block mb-80 -top-6 -right-2"
          src="/percent.svg"
          height="20"
          width="40"
          alt=""
        ></Image>
        <div className="hidden md:block">
          <Yousavedcard savedAmount={"Rs. 2450"} />
        </div>
      </div>
      {/* m v */}
      <div className="flex md:hidden  justify-between items-center m-2 rounded-3xl h-28 w-[25rem] bg-red-400 border-gray-200 border-[0.5px] bg-opacity-50 p-3 my-5 ">
        <div>
          <p className="pr-6 text-lg text-white">
            You have saved a <br /> total of
          </p>
        </div>
        <p className="text-3xl font-extrabold text-white">Rs. 2450</p>
      </div>

      <span className="xl:block hidden w-0.5 border-rose-50 h-96 border opacity-20 "></span>

      <div className="grid ">
        <div className="grid pl-2 mt-2 md:mt-0 md:pl-0">
          <div className="flex overflow-x-scroll no-scrollbar">
            <Offersquarecard
              divImg={
                <Image
                  src="/airplane.svg"
                  height="40"
                  width="25"
                  alt=""
                  className="p-1 mb-2 bg-pink-100 rounded-md"
                />
              }
              savedAmount={"2000"}
              divHight={"h-40"}
              divWidth={"w-40"}
              divBGColor={"bg-white"}
            />
            <Offersquarecard
              divImg={
                <Image
                  src="/hotel.svg"
                  height="40"
                  width="25"
                  alt=""
                  className="p-1 mb-2 bg-pink-100 rounded-md"
                />
              }
              savedAmount={"2000"}
              divHight={"h-40"}
              divWidth={"w-40"}
              divBGColor={"bg-white"}
            />
            <Offersquarecard
              divImg={
                <Image
                  src="/holiday.svg"
                  height="40"
                  width="25"
                  alt=""
                  className="p-1 mb-2 bg-pink-100 rounded-md"
                />
              }
              savedAmount={"2000"}
              divHight={"h-40"}
              divWidth={"w-40"}
              divBGColor={"bg-white"}
            />
          </div>
        </div>
        <Statusoffercard
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

export default Expired;
