import React from "react";
import Image from "next/image";

function Expired() {
  return (
    <div className="bg-gradient-to-r from-red-400 to-rose-600 w-full lg:px-64 flex flex-wrap items-center justify-items-center justify-around pt-12 pb-10 relative ">
      <Image
        className="hidden md:block  opacity-25 absolute top-8 left-10"
        src="/percent.svg"
        height="20"
        width="60"
        alt=""
      ></Image>
      <div className=" lg:text-left text-center lgL:pr-12 relative">
        <p className="text-white text-2xl py-1 pl-1">Your plan has</p>
        <p className="text-white lg:bg-transparent bg-red-400 bg-opacity-60 rounded-full lg:px-0 px-2 text-6xl py-2 pl-1 font-bold tracking-wider">EXPIRED</p>
        <Image
        className="hidden md:block mb-80 opacity-25 absolute -top-6 -right-2"
        src="/percent.svg"
        height="20"
        width="40"
        alt=""
      ></Image>
        <div className="md:block hidden">
          <div className="flex justify-around items-center m-2 rounded-xl h-28 w-[25rem] bg-red-400 border-gray-200 border-[0.5px] bg-opacity-50 p-3 ">
            <div>
              <p className="text-white pr-6 text-xl">
                You have saved a <br /> total of
              </p>
            </div>
            <p className="text-white font-extrabold text-4xl">Rs. 2450</p>
          </div>
        </div>
      </div>
      {/* m v */}
      <div className="flex lg:hidden  justify-between items-center m-2 rounded-3xl h-28 w-[25rem] bg-red-400 border-gray-200 border-[0.5px] bg-opacity-50 p-3 my-5 ">
          <div>
            <p className="text-white pr-6  text-lg">
              You have saved a <br /> total of
            </p>
          </div>
          <p className="text-white font-extrabold text-3xl">Rs. 2450</p>
        </div>

      <span className="md:block hidden w-0.5 border-rose-50 h-96 border opacity-20 "></span>

      {/*  */}
      <div className="grid ">
      <div className="grid lg:mt-0 mt-2 lg:pl-0 pl-2">
            <div className="flex overflow-x-scroll no-scrollbar">
          <div className="bg-white rounded-xl p-3 mt-3 mx-1 h-[10rem] w-[10rem] text-left flex-shrink-0 ">
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
        <div className="flex justify-around mx-2 my-5 py-6 rounded-xl bg-red-400 border-white border-[0.5px] bg-opacity-50 p-3 ">
          <div className="pt-2">
            <p className="text-white text-xs py-2">Renew now to get an</p>
            <p className="text-white text-xl font-bold">Additional Month</p>
            <p className="text-white text-xs mb-1 py-2">for free</p>
            <button className="bg-white text-red-500 font-bold w-32 h-9 rounded-md mt-1 px-2">
              Redeem Now
            </button>
          </div>
          <div className="my-6 bg-white h-24 w-28">
            empty card for image
            {/* <Image src="/calendar.svg" height="60" width="60" alt="claendar" className="mt-2"></Image> */}
          </div>
        </div>
      </div>
      <Image
        className="hidden md:block mt-80 opacity-25 absolute top-8 right-10"
        src="/percent.svg"
        height="20"
        width="132"
        alt=""
      ></Image>
    </div>
  );
}

export default Expired;
