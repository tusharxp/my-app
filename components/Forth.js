import React from "react";
import Image from "next/image";

function Forth() {
  return (
    <div className="bg-light1 mt-10 ">
      <div className="pt-12">
        <p className=" text-center text-black font-bold lg:text-3xl ">
          Here Is Why Members Love
        </p>
        <p className=" text-center mt-3 text-red1 text-4xl font-extrabold">
          Travelxp RED
        </p>
      </div>

      <div className="hidden md:block">
        <div className=" grid grid-rows-2 grid-flow-col justify-center gap-7 content-center m-14 pb-24">
          <div className=" bg-gradient-to-r from-red-400 to-rose-600 rounded-l-full text-white lg:w-[27rem] p-5 lg:flex relative">
            <Image
              className="mr-2 bg-white absolute top-6 -left-11 border-[6px] rounded-full border-light1 w-[100px] h-[100px]"
              src="/illustration-1.svg"
              height="100"
              width="100"
              alt=""
            />
            <div className="lg:m-5 lg:pl-[4rem]">
              <h1 className="mb-2 font-semibold">Your Journey, Our Story</h1>
              <p className=" font-thin text-xs">
                Over 500 million viewers watch Travelxp every month to explore
                the world in stunning 4K HDR and plan their next favourite
                holiday.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-400 to-rose-600 rounded-l-full text-white lg:w-[27rem] lg:flex p-5 relative">
            <Image
              className="mr-2 bg-white absolute top-6 -left-11 border-[6px] rounded-full border-light1 w-[100px] h-[100px]"
              src="/illustration-3.svg"
              height="100"
              width="100"
              alt=""
            />
            <div className="lg:m-5 lg:pl-[4rem]">
              <h1 className="mb-2 font-semibold">Always About You</h1>
              <p className=" font-thin text-xs">
                Even during Covid, 83% of our customers trusted us for refund.
                We are Indias most trusted travel brand.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-rose-400 rounded-r-full text-white lg:w-[27rem] lg:flex p-5 relative">
            <div className="lg:m-5">
              <h1 className="mb-2 font-semibold">Make Trvel Your Lifestyle</h1>
              <p className=" font-thin text-xs">
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
      <div className="lg:hidden flex overflow-x-auto no-scrollbar max-w-full pt-10 pb-28">
        <div className="bg-red1 text-white w-64 mx-1 rounded-3xl h-64 flex-shrink-0">
          <div className="bg-white rounded-t-3xl flex justify-center items-center">
            <Image
              className="mr-2 "
              src="/illustration-1.svg"
              height="100"
              width="200"
              alt=""
            ></Image>
          </div>
          <div className="bg-red1 ">
            <h1 className="font-semibold text-center p-2">
              Your Journey, Our Story
            </h1>
            <p className=" text-center font-thin text-xs px-1">
              Over 500 million viewers watch Travelxp every month to explore the
              world in stunning 4K HDR and plan their next favourite holiday.
            </p>
          </div>
        </div>
        <div className="bg-red1 text-white w-72 mx-1 rounded-3xl h-64 flex-shrink-0">
          <div className="bg-white rounded-t-3xl flex justify-center items-center">
            <Image
              className="mr-2"
              src="/illustration-3.svg"
              height="100"
              width="200"
              alt=""
            ></Image>
          </div>
          <div className="bg-red1 ">
            <h1 className="mb-2 text-center font-semibold p-2">
              Always About You
            </h1>
            <p className=" text-center font-thin text-xs p-2">
              Even during Covid, 83% of our customers trusted us for refund. We
              are Indias most trusted travel brand.
            </p>
          </div>
        </div>
        <div className="bg-red1 text-white w-72 mx-1 rounded-3xl h-64 flex-shrink-0 ">
          <div className="bg-white rounded-t-3xl flex justify-center items-center">
            <Image
              className="ml-2"
              src="/Mask Group 58.svg"
              height="100"
              width="135"
              alt=""
            ></Image>
          </div>
          <div className="">
            <h1 className="mb-2 text-center font-semibold p-2">
              Make Trvel Your Lifestyle
            </h1>
            <p className=" text-center font-thin text-xs p-2">
              Get special documents on your hotel and flight bookings.
            </p>
          </div>
        </div>
        <div className="bg-red1 text-white w-72 mx-1 rounded-3xl h-64 flex-shrink-0">
          <div className="bg-white rounded-t-3xl flex justify-center items-center">
            <Image
              className="ml-2"
              src="/illustration-4.svg"
              height="100"
              width="200"
              alt=""
            ></Image>
          </div>
          <div className="bg-red1 ">
            <h1 className="mb-2 text-center font-semibold p-2">
              Share The Happiness
            </h1>
            <p className=" text-center font-thin text-xs p-2">
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
