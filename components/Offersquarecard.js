import React from "react";

export default function Offersquarecard(props) {
  const { savedAmount, divHight, divWidth, divBGColor, divImg } = props;
  return (
    <div className={`${divHight} ${divWidth} ${divBGColor} text-left flex-shrink-0 rounded-xl p-3 mt-3 ml-3 mr-1`}>
             {divImg}
         <p className="text-black text-[1rem] font-semibold pb-2">Upto 30% off on flights </p>
             <p className="text-gray-400 font-medium text-[1rem] ">
               You have saved
             </p>
             <p className="text-gray-400 font-medium text-[1rem] "><span className="font-bold text-red-600 ">{savedAmount} </span>  till now.</p>
    </div>
  );
}
