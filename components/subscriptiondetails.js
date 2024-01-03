import React from 'react'
import {user} from "../user"

export default function subscriptiondetails(props) {
  const {expiryDate, amount, planDuration, divHight, divWidth, divBackColor} = props

function showDateStatus(subscription) {
  const currentDate = new Date();
  const endDate = new Date(subscription.end_date);

  if (currentDate > endDate) {
      return `Last `;
  } else {
      return `Current `;
  }
}

const dateStatusMessage = showDateStatus(user.user.subscription);


  return (
    <div className={`hidden md:block p-3 mt-3 text-xs w-80 bg-white md:p-3 ${divHight} ${divWidth} ${divBackColor} rounded-2xl`}  >
              <p className="flex justify-between py-1 font-medium tracking-wider text-left text-gray-800">
              {dateStatusMessage} Plan Duration :
                <span className="font-extrabold">{planDuration}</span>
              </p>
              <p className="flex justify-between py-1 font-medium tracking-wider text-left text-gray-800">
                Subscription Amount :
                <span className="font-extrabold ">{amount}</span>
              </p>
              <p className="flex justify-between py-1 font-medium tracking-wider text-left text-gray-800">
                Plan Expiry Date :
                <span className="font-extrabold ">{expiryDate}</span>
              </p>
  </div>
  )
}

