import React from 'react'
import Hero from '../../../assets/hero.jpg'


function HomUi() {
  return (
    <div className="h-1/2 ">
        <img className="object-contain h-[50%] w-full" src={Hero} alt="hero" />
         </div>
  )
}

export default HomUi