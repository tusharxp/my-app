import Image from 'next/image'
import React from 'react'

export default function Rectanglecard(props) {
  const { divheight, divWidth, divBGColor, divImg} = props
  return (
    <div className={`flex-shrink-0 sm:flex-shrink p-1 mx-1 ${divheight} ${divWidth} ${divBGColor} rounded-2xl `}   >
    {divImg}
  </div>
  )
}
