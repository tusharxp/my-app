import React from 'react'

export default function Squarecard(props) {
  const {divContent, divHight, divWidth, divBackColor, divImg} = props
  return (
    <div className={`flex-shrink-0 p-1 mx-1 ${divHight} ${divWidth} ${divBackColor} rounded-2xl`}  >
    {divContent}
    {divImg}
  </div>
  )
}

