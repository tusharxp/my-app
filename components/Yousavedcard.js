import React from "react";

export default function Yousavedcard(props) {
  const { savedAmount, divHight, divWidth, divBackColor } = props;
  return (
    <div
      className={`p-1 mx-1 ${divHight} ${divWidth} ${divBackColor} flex sm:justify-between justify-around items-center m-2  rounded-xl h-28 xl:w-[20rem] md:w-[20rem] bg-red-400 border-gray-200 border-[0.5px] bg-opacity-50 p-3`}>
      
      <div>
        <p className="pr-6 text-left text-white sm:text-sm">
        You have saved a <br /> total of
        </p>
      </div>
      <p className="text-4xl font-extrabold text-right text-white sm:text-xl md:text-3xl">{savedAmount}</p>
    </div>
  );
}

