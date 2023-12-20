import React from "react";
import Image from "next/image";

function Third() {
  return (
    <>
      <div className=" mt-20 mx-auto">
        <p className="text-black font-bold pl-2 text-lg">Offers For You</p>
        <div className="w-full overflow-x-scroll no-scrollbar flex  mt-5 px-2 ">
          <div className="flex-shrink-0 p-1 bg-red1 mx-1 lg:h-64 lg:w-[560px] rounded-2xl">
            empty card for image
            {/* <Image src="/rectange-card-1.svg" height={300} width={550} alt=""></Image> */}
          </div>
          <div className="flex-shrink-0 p-1 bg-red1 mx-1 lg:h-64 lg:w-[560px] rounded-2xl">
            empty card for image
            {/* <Image src="/rectangle-card-2.svg" height={300} width={350} alt=""></Image> */}
          </div>
        </div>
      </div>

      <div className="mt-20 mb-10 mx-auto">
        {/* mobile view */}
        <p className="text-black font-bold text-lg pl-2">More Offers For You</p>
        <div className="flex overflow-x-scroll no-scrollbar lg:justify-center pt-2">
          <div className="m-2 flex-shrink-0 lg:h-64 lg:w-[17rem] bg-red1 rounded-2xl">
          empty card for image
            {/* <Image src="/square-card-1.svg" height="230" width="270" alt="" /> */}
          </div>
          <div className="m-2 flex-shrink-0 lg:h-64 lg:w-[17rem] bg-red1 rounded-2xl">
          empty card for image
            {/* <Image src="/square-card-2.svg" height="230" width="270" alt="" /> */}
          </div>
          <div className="m-2 flex-shrink-0 lg:h-64 lg:w-[17rem] bg-red1 rounded-2xl">
          empty card for image
            {/* <Image src="/square-card-3.svg" height="230" width="270" alt="" /> */}
          </div>
          <div className="m-2 flex-shrink-0 lg:h-64 lg:w-[17rem] bg-red1 rounded-2xl">
          empty card for image
            {/* <Image src="/square-card-4.svg" height="230" width="270" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Third;
