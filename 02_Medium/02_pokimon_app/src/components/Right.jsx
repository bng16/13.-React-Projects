import React from 'react'
import { IoScaleOutline } from "react-icons/io5";
import { GiBodyHeight } from "react-icons/gi";
import pokeImg from "../assets/pokemon.png"
import pokeBall from "../assets/pokeball.png";

import Stats from "./Stats";

function Right() {
  return (
    <div  className='relative w-[50vw] flex flex-col items-center justify-between py-6 bg-blue-100'>
      <h1 className='font-black text-[5vw]'>PIKACHU</h1>
      <div className='relative w-[70%] h-[60%] bg-white rounded-md flex z-10'>
        <div className='absolute w-[90%] h-[10%] bg-gray-100 rounded-lg left-[50%] translate-x-[-50%] top-[15%] translate-y-[50%] flex justify-around items-center'>
          <div className='flex gap-2 items-center'>
            <IoScaleOutline />
            3kg
          </div>

          <div className='flex gap-2 items-center'>
            <GiBodyHeight/>
            30cm
          </div>
        </div>
        <div className='absolute bg-gray-100 w-[90%] h-[60%] rounded-lg left-[50%] top-[65%] translate-y-[-50%] translate-x-[-50%] flex flex-col items-center justify-around py-4'>
          <Stats/>
          <Stats/>
          <Stats/>
          <Stats/>
          <Stats/>
          <Stats/>
        </div>
      </div>
      <img src={pokeImg} alt="" className='absolute z-10 w-[40%] top-[30%] translate-y-[-50%] left-[50%] translate-x-[-50%]'/>
      <img src={pokeBall} alt="" className='absolute z-1 w-[50%] right-[20%] translate-x-[50%] opacity-40'/>
    </div>
  )
}

export default Right