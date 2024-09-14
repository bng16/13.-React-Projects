import React from 'react'
import IconCard from './IconCard'

function Left() {
  let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  return (
    <div className='w-1/2 h-screen  flex flex-col items-center justify-around'>
      <div className=' w-[90%] h-[80%] flex flex-wrap justify-around gap-y-4 overflow-y-scroll '>
        {arr.map(() => <IconCard/>)}
      </div>
      <div className='flex gap-5'>
        <div className='px-3 py-2 hover:bg-black hover:text-white border-2 border-black ease-in-out duration-300 rounded-lg flex justify-center items-center cursor-pointer'>Previous</div>
        <div className='px-3 py-2 hover:bg-black hover:text-white border-2 border-black ease-in-out duration-300 rounded-lg flex justify-center items-center cursor-pointer'>Next</div>
      </div>
    </div>
  )
}

export default Left


