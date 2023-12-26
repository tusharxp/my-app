import React from "react";
import Image from "next/image";

function Forth() {
  return (
    <div className="mt-10 bg-light1 ">
      <div className="pt-12">
        <p className="font-bold text-center text-black lg:text-3xl">
          Here Is Why Members Love
        </p>
        <p className="mt-3 text-4xl font-extrabold text-center text-red1">
          Travelxp RED
        </p>
      </div>

      <div className="hidden md:block">
        <div className="grid content-center justify-center grid-flow-col grid-rows-2 pb-24 gap-7 m-14">
          <div className=" bg-gradient-to-r  from-rose-400 to-red-600 rounded-l-full text-white lg:w-[27rem] p-5 lg:flex relative">
            <Image
              className="mr-2 bg-white absolute top-6 -left-11 border-[6px] rounded-full border-light1 w-[100px] h-[100px]"
              src="/illustration-1.svg"
              height="100"
              width="100"
              alt=""
            />
            <div className="lg:m-5 lg:pl-[4rem]">
              <h1 className="mb-2 font-semibold">Your Journey, Our Story</h1>
              <p className="text-xs font-thin ">
                Over 500 million viewers watch Travelxp every month to explore
                the world in stunning 4K HDR and plan their next favourite
                holiday.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-rose-400 to-red-600 rounded-l-full text-white lg:w-[27rem] lg:flex p-5 relative">
            <Image
              className="mr-2 bg-white absolute top-6 -left-11 border-[6px] rounded-full border-light1 w-[100px] h-[100px]"
              src="/illustration-3.svg"
              height="100"
              width="100"
              alt=""
            />
            <div className="lg:m-5 lg:pl-[4rem]">
              <h1 className="mb-2 font-semibold">Always About You</h1>
              <p className="text-xs font-thin ">
                Even during Covid, 83% of our customers trusted us for refund.
                We are Indias most trusted travel brand.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-rose-400 rounded-r-full text-white lg:w-[27rem] lg:flex p-5 relative">
            <div className="lg:m-5">
              <h1 className="mb-2 font-semibold">Make Trvel Your Lifestyle</h1>
              <p className="text-xs font-thin ">
                Get special documents on your hotel and flight bookings.
              </p>
            </div>
            <Image
              className="ml-2 bg-white absolute top-6 -right-11 border-[6px] rounded-full border-light1"
              src="/Mask Group 58.svg"
              height="100"
              width="100"
              alt=""
            ></Image>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-rose-400 rounded-r-full text-white lg:flex lg:w-[27rem] p-5 relative">
            <div className="lg:m-5">
              <h1 className="mb-2 font-semibold">Share The Happiness</h1>
              <p className=" font-thin text-xs w-[80%]">
                Share your membership with your friends and family! One for all,
                Travelxp RED!
              </p>
            </div>
            <Image
              className="ml-2 absolute top-6 -right-11 bg-white rounded-full w-[100px] h-[100px] border-[6px] border-light1"
              src="/illustration-4.svg"
              height="100"
              width="100"
              alt=""
            ></Image>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="flex max-w-full pt-10 overflow-x-auto md:hidden no-scrollbar pb-28">
        <div className="flex-shrink-0 w-64 h-64 mx-1 text-white bg-rose-400 rounded-3xl">
          <div className="flex items-center justify-center bg-white rounded-t-3xl">
            <Image
              className="mr-2 "
              src="/illustration-1.svg"
              height="100"
              width="200"
              alt=""
            ></Image>
          </div>
          <div className="bg-rose-400 ">
            <h1 className="p-2 font-semibold text-center">
              Your Journey, Our Story
            </h1>
            <p className="px-1 text-xs font-thin text-center ">
              Over 500 million viewers watch Travelxp every month to explore the
              world in stunning 4K HDR and plan their next favourite holiday.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 h-64 mx-1 text-white bg-rose-400 w-72 rounded-3xl">
          <div className="flex items-center justify-center bg-white rounded-t-3xl">
            <Image
              className="mr-2"
              src="/illustration-3.svg"
              height="100"
              width="200"
              alt=""
            ></Image>
          </div>
          <div className="bg-rose-400 rounded-xl">
            <h1 className="p-2 mb-2 font-semibold text-center">
              Always About You
            </h1>
            <p className="p-2 text-xs font-thin text-center ">
              Even during Covid, 83% of our customers trusted us for refund. We
              are Indias most trusted travel brand.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 h-64 mx-1 text-white bg-rose-400 w-72 rounded-3xl ">
          <div className="flex items-center justify-center bg-white rounded-t-3xl">
            <Image
              className="ml-2"
              src="/Mask Group 58.svg"
              height="100"
              width="135"
              alt=""
            ></Image>
          </div>
          <div className="">
            <h1 className="p-2 mb-2 font-semibold text-center">
              Make Trvel Your Lifestyle
            </h1>
            <p className="p-2 text-xs font-thin text-center ">
              Get special documents on your hotel and flight bookings.
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 h-64 mx-1 text-white bg-rose-400 w-72 rounded-3xl">
          <div className="flex items-center justify-center bg-white rounded-t-3xl">
            <Image
              className="ml-2"
              src="/illustration-4.svg"
              height="100"
              width="200"
              alt=""
            ></Image>
          </div>
          <div className="bg-rose-400 ">
            <h1 className="p-2 mb-2 font-semibold text-center">
              Share The Happiness
            </h1>
            <p className="p-2 text-xs font-thin text-center ">
              Share your membership with your friends and family! One for all,
              Travelxp RED!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forth;
