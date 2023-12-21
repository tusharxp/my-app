import React from "react";
import Image from "next/image";
import Rectanglecard from "./Rectanglecard";

function Third() {
  return (
    <>
      <div className="mx-auto mt-20 ">
        <p className="pl-2 text-lg font-bold text-black">Offers For You</p>
        <div className="flex pt-2 overflow-x-scroll no-scrollbar lg:justify-center">
          <Rectanglecard divheight={'h-64'} 
            divImg={
              <Image
                src={"/rectange-card-1.svg"}
                height={100}
                width={556}
                alt=""
              />
            }
          />
          <Rectanglecard divheight={'h-64'}
            divImg={
              <Image
                src={"/rectangle-card-2.svg"}
                height={300}
                width={560}
                alt=""
              />
            }
          />
        </div>
      </div>

      <div className="mx-auto mt-20 mb-10">
        <p className="pl-2 text-lg font-bold text-black">More Offers For You</p>
        <div className="flex pt-2 overflow-x-scroll no-scrollbar lg:justify-center">
          <Rectanglecard
            divImg={
              <Image
                src={"/square-card-1.svg"}
                height={150}
                width={270}
                alt=""
              />
            }
          />
          <Rectanglecard
            divImg={
              <Image
                src={"/square-card-2.svg"}
                height={156}
                width={270}
                alt=""
              />
            }
          />
          <Rectanglecard
            divImg={
              <Image
                src={"/square-card-3.svg"}
                height={156}
                width={270}
                alt=""
              />
            }
          />
          <Rectanglecard
            divImg={
              <Image
                src={"/square-card-4.svg"}
                height={156}
                width={270}
                alt=""
              />
            }
          />
        </div>
      </div>
    </>
  );
}

export default Third;
