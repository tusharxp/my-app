import React from "react";
import Subscriptiondetails from "./subscriptiondetails";
import {user} from "../user"


function firstsection() {

  function showDateStatus() {
    const currentDate = new Date();
    const endDate = new Date(user.user.subscription.end_date);

    if (currentDate > endDate) {
        return `Last `;
    } else {
        return `Current `;
    }
}

const dateStatusMessage = showDateStatus(user.user.subscription);

  return (
    <div className="bg-gradient-to-t from-rose-100 to-orange-50 bg-light1 ">
      <div className="pt-10 xl:px-40">
        <div className="flex flex-wrap items-center justify-around sm:flex-nowrap md:justify-around sm:mx-auto md:px-4 justify-items-center">
          <div className="text-center md:text-left sm:text-center xl:pt-10">
            <p className="py-2 text-3xl font-semibold text-black lg:text-3xl sm:text-2xl ">
              Welcome to
            </p>
            <p className=" lg:text-5xl sm:text-3xl text-4xl font-[900] text-red1 tracking-wider">
              Travelxp {user.user.subscription.plan_name}
            </p>
            
            <Subscriptiondetails planDuration={`${user.user.subscription.validity}`} amount={`${user.user.subscription.amount}`} expiryDate={`${user.user.subscription.end_date}`} />
            
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
          {dateStatusMessage} Plan Duration :
            <span className="font-bold ">{user.user.subscription.validity}</span>
          </p>
          <p className="flex justify-between py-1 font-medium tracking-wide text-left text-gray-800">
            Subscription Amount :<span className="font-bold">{user.user.subscription.amount}</span>
          </p>
          <p className="flex justify-between py-1 font-medium tracking-wide text-left text-gray-800">
            Plan Expiry Date :<span className="font-bold">{user.user.subscription.end_date}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default firstsection;
