import React from 'react'

export default function subscriptiondetails(props) {
  const {expiryDate, amount, planDuration, divHight, divWidth, divBackColor} = props
  return (
    <div className={`hidden md:block p-3 mt-3 text-xs w-80 bg-white md:p-3 ${divHight} ${divWidth} ${divBackColor} rounded-2xl`}  >
              <p className="flex justify-between py-1 font-medium tracking-wider text-left text-gray-800">
                Current Plan Duration :
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

