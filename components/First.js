import React from "react";
import Image from "next/image";

function First() {
  return (
    <div className="bg-rose-100 ">
      <div className="bg-gradient-to-t from-rose-100 to-orange-50 bg-light1 pt-10 lg:px-40">
        <div className=" px-4 flex flex-wrap items-center justify-items-center justify-around mx-auto ">
          <div className=" text-center lg:text-left md:text-center lg:pt-10">
            <p className=" text-3xl text-black font-semibold py-2 ">
              Welcome to
            </p>
            <p className=" lg:text-5xl text-4xl font-[900] text-red1 tracking-wider">
              Travelxp RED
            </p>
            <div className="bg-white rounded-2xl p-3 text-xs mt-3 hidden md:block py-4">
              <p className="py-1 flex justify-between font-medium tracking-wider text-left text-gray-800">
                Current Plan Duration :
                <span className="font-extrabold">365 Days</span>
              </p>
              <p className="py-1 flex justify-between font-medium tracking-wider text-left text-gray-800">
                Subscription Amount :
                <span className=" font-extrabold">1899</span>
              </p>
              <p className="py-1 flex justify-between font-medium tracking-wider text-left text-gray-800">
                Plan Expiry Date :
                <span className=" font-extrabold">6 Dec 2022</span>
              </p>
            </div>
          </div>
          <img src={"/heroImage.png"} height={400} width={500} alt="card" className=""/>

        </div>
      </div>

      {/* Mobile */}
      <div className="bg-white rounded-t-3xl lg:pt-0 pt-8 px-4">
        <div className="shadow-xl  lg:hidden mr-3 ml-3  rounded-t-3xl bg-gradient-to-l from-rose-100 to-orange-50 border-black align-middle p-6  ">
        <p className="py-1 flex justify-between font-medium tracking-wide text-left text-gray-800">
                Current Plan Duration :
                <span className=" font-extrabold">365 Days</span>
              </p>
              <p className="py-1 flex justify-between font-medium tracking-wide text-left text-gray-800">
                Subscription Amount :
                <span className="font-extrabold">1899</span>
              </p>
              <p className="py-1 flex justify-between font-medium tracking-wide text-left text-gray-800">
                Plan Expiry Date :
                <span className="font-extrabold">6 Dec 2022</span>
              </p>
        </div>
      </div>
    </div>
  );
}

export default First;
