import React from "react";
import Image from "next/image";
import Dealsquarecard from "./dealsquarecard";

function usersubnormalui() {
  return (
    <div className="relative flex flex-wrap items-center w-full pt-12 pb-1 justify-evenly md:flex-nowrap xl:px-28 2xl:px-52 bg-gradient-to-r from-red-400 to-rose-500 md:pb-10">
      <Image
        className="absolute opacity-25 mb-52 top-8 left-10"
        src="/percent.svg"
        height="20"
        width="60"
        alt=""
      ></Image>
      <div className="md:text-left text-center pb-5 lg:pb-0 lg:border-b-0 xl:pr-12  sm:w-[25rem] md:w-[25rem]  relative md:pl-10 xl:pl-0">
        <p className="text-xl text-white md:text-2xl lg:pl-1 lg:py-1">
          Book now to
        </p>
        <p className="text-5xl font-bold tracking-wider text-white lg:text-6xl lg:pl-1 lg:py-1">
          SAVE BIG
        </p>
        <p className="text-xl text-white lg:text-2xl lg:pl-1 lg:py-1">
          On Your Next Trip
        </p>
        <Image
          className="absolute hidden opacity-25 md:right-10 md:block mb-80 -top-6"
          src="/percent.svg"
          height="20"
          width="40"
          alt=""
        ></Image>
      </div>
      <hr className="w-3/4 border-1 md:hidden" />
      <span className="xl:block hidden w-0.5 border-rose-50 h-96 border opacity-20 "></span>

      <div className="mt-2 text-center pl-22 md:text-left lg:mt-0 lg:px-0">
        <p className="px-2 text-xs font-medium text-white md:my-2 xl:text-lg md:pl-2">
          Make travel your lifestyle with the Travelxp RED.
        </p>
        <p className="p-1 px-2 text-xs text-white md:mb-5 xl:text-lg md:pl-2">
          Avail these exclusive discounts and offers with your membership!
        </p>
        <div className="grid mt-2 md:mt-0">
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
              savedAmount={"2000"}
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
              savedAmount={"2000"}
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
              savedAmount={"2000"}
              divHight={"h-40"}
              divWidth={"w-40"}
              divBGColor={"bg-white"}
            />
          </div>
        </div>
        <Image
          className="absolute mt-48 opacity-25 top-14 right-10"
          src="/percent.svg"
          height="40"
          width="132"
          alt=""
        ></Image>
      </div>
    </div>
  );
}

export default usersubnormalui;
