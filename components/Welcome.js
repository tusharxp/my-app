import React from "react";
import Image from "next/image";

function First() {
  return (
    <div className="bg-gradient-to-t from-rose-100 to-orange-50 bg-light1 ">
      <div className="pt-10 xl:px-40">
        <div className="flex flex-wrap items-center justify-around lg:flex-nowrap lg:justify- xl:justify-around sm:mx-auto xl:px-4 justify-items-center">
          <div className="text-center lg:text-left md:text-center xl:pt-10">
            <p className="py-2 text-3xl font-semibold text-black xl:text-3xl lg:text-2xl ">
              Welcome to
            </p>
            <p className=" xl:text-5xl lg:text-3xl text-4xl font-[900] text-red1 tracking-wider">
              Travelxp RED
            </p>
            <div className="hidden p-4 mt-3 text-xs bg-white lgp-3 rounded-2xl md:block">
              <p className="flex justify-between py-1 font-medium tracking-wider text-left text-gray-800">
                Current Plan Duration :
                <span className="font-extrabold">365 Days</span>
              </p>
              <p className="flex justify-between py-1 font-medium tracking-wider text-left text-gray-800">
                Subscription Amount :
                <span className="font-extrabold ">1899</span>
              </p>
              <p className="flex justify-between py-1 font-medium tracking-wider text-left text-gray-800">
                Plan Expiry Date :
                <span className="font-extrabold ">6 Dec 2022</span>
              </p>
            </div>
          </div>
          <img
            src={"/heroImage.png"}
            height={400}
            width={500}
            alt="card"
            className=""
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="px-4 pt-8 bg-white rounded-t-3xl lg:pt-0 md:hidden">
        <div className="p-4 ml-3 mr-3 align-middle border-black shadow-xl rounded-t-3xl bg-gradient-to-l from-rose-100 to-orange-50 ">
          <p className="flex justify-between py-1 font-medium tracking-wide text-left text-gray-800">
            Current Plan Duration :
            <span className="font-bold ">365 Days</span>
          </p>
          <p className="flex justify-between py-1 font-medium tracking-wide text-left text-gray-800">
            Subscription Amount :<span className="font-bold">1899</span>
          </p>
          <p className="flex justify-between py-1 font-medium tracking-wide text-left text-gray-800">
            Plan Expiry Date :<span className="font-bold">6 Dec 2022</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default First;
