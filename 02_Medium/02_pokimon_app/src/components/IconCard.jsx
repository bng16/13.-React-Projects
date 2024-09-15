import React from 'react'


function IconCard({pokemon,setSelectedPokemon}) {

  return (
    <div className=' w-[10vw] h-[10vw] rounded-lg flex flex-col  border  hover:border-black ease-in-out duration-300 cursor-pointer' onClick={()=>setSelectedPokemon(pokemon)}>
      <div className='w-full h-1/2 '></div>
      <div className='relative w-full h-1/2 bg-gray-100 rounded-b-lg flex justify-center items-center'>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.sprites.front_default} alt=""  className='absolute w-[60%] top-[-15%] left-[50%] translate-x-[-50%] translate-y-[-50%]'/>
      </div>
    </div>
  )
}

export default IconCard