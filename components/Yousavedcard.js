import React from "react";

export default function Yousavedcard(props) {
  const { savedAmount, divHight, divWidth, divBackColor } = props;
  return (
    <div
      className={`p-1 mx-1 ${divHight} ${divWidth} ${divBackColor} flex justify-around items-center m-2 rounded-xl h-28 w-[25rem] bg-red-400 border-gray-200 border-[0.5px] bg-opacity-50 p-3`}>
      
      <div>
        <p className="pr-6 text-xl text-white">
        You have saved a <br /> total of
        </p>
      </div>
      <p className="text-4xl font-extrabold text-white">{savedAmount}</p>
    </div>
  );
}
