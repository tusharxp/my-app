import React from "react";
import Image from "next/image";

function Second() {
  return (
      <div className="lg:px-64 w-full bg-gradient-to-r from-red-400 to-rose-600 flex flex-wrap items-center justify-around pt-12 pb-1 relative">
        <Image
          className=" mb-52 opacity-25 absolute top-8 left-10  "
          src="/percent.svg"
          height="20"
          width="60"
          alt=""
        ></Image>
        <div className="lg:text-left text-center pb-5 lg:pb-0 lg:border-b-0 lg:pr-12 w-[25rem] relative">
          <p className="text-white text-xl lg:text-2xl lg:pl-1 lg:py-1">Book now to</p>
          <p className="text-white text-5xl lg:text-6xl lg:pl-1 lg:py-1 font-bold tracking-wider">SAVE BIG</p>
          <p className="text-white text-xl lg:text-2xl lg:pl-1 lg:py-1">On Your Next Trip</p>
          <Image
        className="hidden md:block mb-80 opacity-25 absolute -top-6 -right-2"
        src="/percent.svg"
        height="20"
        width="40"
        alt=""
      ></Image>
        </div>
        <hr className="border-1 w-3/4 lg:hidden" />
        <span className="md:block hidden w-0.5 border-rose-50 h-96 border opacity-20 "></span>

        <div className="lg:text-left text-center lg:mt-0 mt-2 lg:px-0">
          <p className="text-white lg:my-2 lg:text-lg lg:pl-2 font-medium text-[0.9rem] px-2">
            Make travel your lifestyle with the Travelxp RED.
          </p>
          <p className="text-white lg:mb-5 lg:text-lg lg:pl-2 px-2">
            Avail these exclusive discounts and offers with your membership!
          </p>
          <div className="grid lg:mt-0 mt-2">
            <div className="flex overflow-x-scroll no-scrollbar">
          <div className="bg-white rounded-xl p-3 mt-3 ml-3 mr-1 h-[10rem] w-[10rem] text-left flex-shrink-0 ">
            <Image
              src="/airplane.svg"
              height="40"
              width="25"
              alt=""
              className="mb-2 bg-pink-100 rounded-md p-1"
            ></Image>
            <p className="text-black text-[1rem] font-semibold pb-2">Upto 30% off on flights</p>
            <p className="text-gray-400 font-medium text-[1rem] ">
              You have saved
            </p>
            <p className="text-gray-400 font-medium text-[1rem] "><span className="text-red-600 font-bold ">2000</span>  till now.</p>
          </div>
          <div className="bg-white rounded-xl p-3 mt-3 mx-2 h-[10rem] w-[10rem] text-left flex-shrink-0">
            <Image
              src="/hotel.svg"
              height="30"
              width="25"
              alt=""
              className="mb-2 bg-pink-100 rounded-md p-1"
            ></Image>
           <p className="text-black text-[1rem] font-semibold pb-2">Upto 30% off on flights</p>
            <p className="text-gray-400 font-medium text-[1rem] ">
              You have saved
            </p>
            <p className="text-gray-400 font-medium text-[1rem] "><span className="text-red-600 font-bold ">2000</span>  till now.</p>
          </div>
          <div className="bg-white rounded-xl p-3 mt-3 mx-1 h-[10rem] w-[10rem] text-left flex-shrink-0">
            <Image
              src="/holiday.svg"
              height="30"
              width="25"
              alt=""
              className="mb-2 bg-pink-100 rounded-md p-1"
            ></Image>
            <p className="text-black text-[1rem] font-semibold pb-2">Upto 30% off on flights</p>
            <p className="text-gray-400 font-medium text-[1rem] ">
              You have saved
            </p>
            <p className="text-gray-400 font-medium text-[0.60rem] "><span className="text-red-600 font-bold ">2000</span>  till now.</p>
          </div>
        </div>
        </div>
        <Image
          className=" mt-48 opacity-25 absolute top-14 right-10"
          src="/percent.svg"
          height="40"
          width="132"
          alt=""
        ></Image>
      </div>
      </div>
  );
}

export default Second;
