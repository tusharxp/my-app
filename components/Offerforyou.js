import React from "react";
import Image from "next/image";
import Rectanglecard from "./Rectanglecard";
import Squarecard from "./Squarecard";

function Third() {
  return (
    <>
      <div className="mx-auto mt-20 ">
        <p className="pl-2 text-lg font-bold text-black">Offers For You</p>
        <div className="flex pt-2 overflow-x-scroll no-scrollbar md:justify-center">
          <Rectanglecard 
           divImg={
              <Image
                src={"/rectange-card-1.svg"}
                height={100}
                width={360}
                alt=""
                className="md:hidden"
              />
            } />
          <Rectanglecard 
           divImg={
              <Image
                src={"/rectange-card-1.svg"}
                height={100}
                width={360}
                alt=""
                className="md:hidden"
              />
            } />
        </div>
        
      </div>

      <div className="mx-auto mt-20 mb-10">
        <p className="pl-2 text-lg font-bold text-black">More Offers For You</p>
        <div className="flex pt-2 overflow-x-scroll no-scrollbar lg:justify-center">
          <Squarecard
            divImg={
              <Image
                src={"/square-card-1.svg"}
                height={150}
                width={270}
                alt=""
              />
            }
          />
          <Squarecard
            divImg={
              <Image
                src={"/square-card-2.svg"}
                height={156}
                width={270}
                alt=""
              />
            }
          />
          <Squarecard
            divImg={
              <Image
                src={"/square-card-3.svg"}
                height={156}
                width={270}
                alt=""
              />
            }
          />
          <Squarecard
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
