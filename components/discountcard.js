import React from 'react'

export default function discountcard(props) {
  const {divContent, divHight, divWidth, divBGColor, divImg, divBottom, divCenter, divTop, divBtn} = props
  return (
    <div className={`flex justify-around mx-2 my-5 py-6 rounded-xl ${divHight} ${divWidth} ${divBGColor} border-white border-[0.5px] bg-opacity-50 p-3 `}  >
    {divContent}
    
          <div className="pt-2">
            <p className="py-2 text-xs text-white">{divTop}</p>
            <p className="text-xl font-bold text-white">{divCenter}</p>
            <p className="py-2 mb-1 text-xs text-white">{divBottom}</p>
            <button className="w-32 px-2 mt-1 font-bold text-red-500 bg-white rounded-md h-9">
              {divBtn}
            </button>
          </div>
          {divImg}
            {/* <Image src="/calendar.svg" height="60" width="60" alt="claendar" className="mt-2"></Image> */}
        </div>
  )
}

