import React from "react";

export default function dealsquarecard(props) {
  const { savedAmount, divHight, divWidth, divBGColor, divImg } = props;
  return (
    <div className={`${divHight} ${divWidth} ${divBGColor} text-left flex-shrink-0 rounded-xl p-3 mt-3 ml-3 mr-1`}>
             {divImg}
         <p className="text-zinc-600 text-[1rem] font-semibold pb-2">Upto 30% off on flights </p>
             <p className="text-sm font-medium text-gray-400 ">
               You have saved
             </p>
             <p className="text-sm font-medium text-gray-400 "><span className="font-bold text-red-600 ">{savedAmount} </span>  till now.</p>
    </div>
  );
}
