import React from 'react';
import IconCard from './IconCard';

function Left({ pokeData, setSelectedPokemon, prevUrl, nextUrl, setUrl, loading }) {
  return (
    <div className="w-1/2 h-screen flex flex-col items-center justify-around">
      <div className="w-[90%] h-[80%] flex flex-wrap justify-around gap-y-4 overflow-y-scroll">
        {loading ? (
          <div>Loading Pokémon...</div>
        ) : (
          pokeData.map((p) => (
            <IconCard key={p.name} pokemon={p} setSelectedPokemon={setSelectedPokemon} />
          ))
        )}
      </div>
      <div className="flex gap-5">
        <button
          className={`px-3 py-2 border-2 border-black ease-in-out duration-300 rounded-lg flex justify-center items-center ${prevUrl && !loading ? 'hover:bg-black hover:text-white cursor-pointer' : 'bg-gray-300 cursor-not-allowed'}`}
          onClick={() => prevUrl && setUrl(prevUrl)}
          disabled={!prevUrl || loading}
        >
          Previous
        </button>
        <button
          className={`px-3 py-2 border-2 border-black ease-in-out duration-300 rounded-lg flex justify-center items-center ${nextUrl && !loading ? 'hover:bg-black hover:text-white cursor-pointer' : 'bg-gray-300 cursor-not-allowed'}`}
          onClick={() => nextUrl && setUrl(nextUrl)}
          disabled={!nextUrl || loading}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Left;
