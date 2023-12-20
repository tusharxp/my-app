import React from "react";
import Image from "next/image";

function First() {
  return (
    <div className="bg-rose-100 ">
      <div className="pt-10 bg-gradient-to-t from-rose-100 to-orange-50 bg-light1 lg:px-40">
        <div className="flex flex-wrap items-center justify-around px-4 mx-auto  justify-items-center">
          <div className="text-center  lg:text-left md:text-center lg:pt-10">
            <p className="py-2 text-3xl font-semibold text-black ">
              Welcome to
            </p>
            <p className=" lg:text-5xl text-4xl font-[900] text-red1 tracking-wider">
              Travelxp RED
            </p>
            <div className="hidden p-3 py-4 mt-3 text-xs bg-white rounded-2xl md:block">
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
      <div className="px-4 pt-8 bg-white rounded-t-3xl lg:pt-0">
        <div className="p-6 ml-3 mr-3 align-middle border-black shadow-xl lg:hidden rounded-t-3xl bg-gradient-to-l from-rose-100 to-orange-50 ">
          <p className="flex justify-between py-1 font-medium tracking-wide text-left text-gray-800">
            Current Plan Duration :
            <span className="font-extrabold ">365 Days</span>
          </p>
          <p className="flex justify-between py-1 font-medium tracking-wide text-left text-gray-800">
            Subscription Amount :<span className="font-extrabold">1899</span>
          </p>
          <p className="flex justify-between py-1 font-medium tracking-wide text-left text-gray-800">
            Plan Expiry Date :<span className="font-extrabold">6 Dec 2022</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default First;
