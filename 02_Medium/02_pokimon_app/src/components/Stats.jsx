import React from 'react'

function Stats() {
  return (
    <div className='w-[80%] flex items-center justify-between'>
      <div className='w-[35%] flex gap-2 justify-between items-center'>
        <h1 className='w-[50%] text-right'>PWR</h1>
        <div className='w-[1px] h-[20px] bg-black'></div>
        <h1 className='w-[30%] '>075</h1>
      </div>
      <div className='w-[60%] h-[5px] rounded-full bg-blue-100'>
        <div className='w-[70%] h-full rounded-lg bg-blue-300'></div>
      </div>
    </div>
  )
}

export default Stats 