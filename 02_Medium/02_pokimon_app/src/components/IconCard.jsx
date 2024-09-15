import React from 'react'

import pokeImg from "../assets/pokemon.png"

function IconCard() {
  return (
    <div className='relative w-[10vw] h-[10vw] rounded-lg flex flex-col  border  hover:border-black ease-in-out duration-300 cursor-pointer'>
      <div className='w-full h-1/2 '></div>
      <div className='w-full h-1/2 bg-gray-100 rounded-b-lg flex justify-center items-center'>
      <h1>Pikachu</h1>
      </div>
      <img src={pokeImg} alt=""  className='absolute w-[60%] top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]'/>
    </div>
  )
}

export default IconCard