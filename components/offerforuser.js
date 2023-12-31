"use client";
import React, { useeffect } from "react";
import Image from "next/image";
import Rectangulercard from "./rectangulercard";
import Squarecard from "./squarecard";
import { user } from "../user";

function offerforuser() {
  const { data } = user;
  
  const Imagedata = data.map((items) =>
    items.items.map((item) =>
      item.items.map((item) => item.images.map((item) => item))
    )
  );

  const newImagedata=Imagedata.map((items) => items[0][0])

  const finalData=newImagedata[0].find((items)=>{
    if(items.aspect==="16:9"){
      return "https://images.travelxp.com/ott"+items.image
    }
  })

  // console.log(finalData.image)

  return (
    <>
      <div className="mx-auto mt-20 ">
        <p className="pl-2 text-lg font-bold text-black">Offers For You</p>
        <div className="flex pt-2 overflow-x-scroll no-scrollbar md:justify-center">
          {data.map((item, index) => (
            <Rectangulercard
              key={index}
              divImg={item.items.map((offer, offerIndex) => (
                <Image
                  key={offerIndex}
                  src={"https://images.travelxp.com/ott"+finalData.image}
                  height={100}
                  width={360}
                  alt={offer.title}
                  className="lg:w-[570px] lg:overflow-y-hidden"
                />
              ))}
            />
          ))}

          {data.map((item, index) => (
            <Rectangulercard
              key={index}
              divImg={item.items.map((offer, offerIndex) => (
                <Image
                  key={offerIndex}
                  src={"https://images.travelxp.com/ott"+finalData.image}
                  height={100}
                  width={360}
                  alt={offer.title}
                  className="lg:w-[570px] lg:overflow-y-hidden"
                />
              ))}
            />
          ))}
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

export default offerforuser;
