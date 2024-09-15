import React from 'react'

function Stats({stats}) {
  return (
    <div className='w-[80%] flex items-center justify-between'>
      <div className='w-[35%] flex gap-2 justify-between items-center'>
        <h1 className='w-[50%] text-right text-bold'>{stats[0]}</h1>
        <div className='w-[1px] h-[20px] bg-black'></div>
        <h1 className='w-[30%] '>{stats[1]}</h1>
      </div>
      <div className='w-[60%] h-[5px] rounded-full bg-blue-100 overflow-hidden'>
        <div className=' h-full rounded-lg bg-blue-300 duration-1000' style={{width:`${stats[1]}%`}}></div>
      </div>
    </div>
  )
}

export default Stats 