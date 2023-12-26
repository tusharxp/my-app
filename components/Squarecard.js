import React from 'react'

export default function squarecard(props) {
  const {divContent, divHight, divWidth, divBackColor, divImg} = props
  return (
    <div className={`flex-shrink-0 sm:flex-shrink p-1 mx-1 ${divHight} ${divWidth} ${divBackColor} rounded-2xl`}  >
    {divContent}
    {divImg}
  </div>
  )
}

