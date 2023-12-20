import React from "react";
import Image from "next/image";
import Yousavedcard from "./Yousavedcard";
import Statusoffercard from "./Statusoffercard";
import Offersquarecard from "./Offersquarecard";

function Nearexpire() {
  return (
    <div className="relative flex flex-wrap items-center justify-around w-full pt-12 pb-10 bg-gradient-to-r from-red-400 to-rose-600 lg:px-64 justify-items-center ">
      <Image
        className="absolute hidden opacity-25 md:block mb-80 top-8 left-10"
        src="/percent.svg"
        height="20"
        width="60"
        alt=""
      ></Image>
      <div className="relative w-full text-center lg:text-left lg:pr-12 md:text-center lg:w-auto">
        <p className="py-1 pl-1 text-2xl text-white md:text-center lg:text-left">
          Expires in
        </p>
        <p className="mx-20 text-5xl font-bold tracking-wide text-white bg-red-400 rounded-full lg:bg-transparent bg-opacity-60 lg:mx-0 lg:text-6xl lg:py-2 lg:pl-1 ">
          45 DAYS{" "}
        </p>

        <Image
          className="absolute hidden opacity-25 md:block mb-80 -top-6 right-2"
          src="/percent.svg"
          height="20"
          width="40"
          alt=""
        />

        <div className="hidden md:block">
          <Yousavedcard savedAmount={"Rs. 2450"} />
        </div>
      </div>

      <span className="md:block hidden w-0.5 border-rose-50 h-96 border opacity-20 "></span>

      {/* MV */}
      <div className="flex lg:hidden justify-between items-center m-2 rounded-3xl h-28 w-[25rem] bg-red-400 border-gray-200 border-[0.5px] bg-opacity-50 p-3 my-5 ">
        <div>
          <p className="pr-6 text-lg text-white">
            You have saved a <br /> total of
          </p>
        </div>
        <p className="text-3xl font-extrabold text-white">Rs. 2450</p>
      </div>

      <div>
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
        className="absolute hidden opacity-25 md:block mt-80 top-8 right-10"
        src="/percent.svg"
        height="40"
        width="132"
        alt=""
      ></Image>
    </div>
  );
}

export default Nearexpire;
