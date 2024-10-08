import React, { useContext } from 'react';
import { PokemonContext } from '../store/PokemonContext'; // Import the context
import { IoScaleOutline } from "react-icons/io5";
import { GiBodyHeight } from "react-icons/gi";
import pokeImg from "../assets/pokemon.png";
import pokeBall from "../assets/pokeball.png";
import Stats from "./Stats";

function Right() {
  const { selectedPokemon } = useContext(PokemonContext); // Get selectedPokemon from context

  const statsList = selectedPokemon ? [
    ["HP", selectedPokemon.stats[0].base_stat],
    ["ATK", selectedPokemon.stats[1].base_stat],
    ["DEF", selectedPokemon.stats[2].base_stat],
    ["SP.ATK", selectedPokemon.stats[3].base_stat],
    ["SP.DEF", selectedPokemon.stats[4].base_stat],
    ["SPEED", selectedPokemon.stats[5].base_stat],
  ] : [];

  return (
    <div className="relative w-[50vw] flex flex-col items-center justify-between py-6 bg-blue-100">
      <h1 className="font-black text-[5vw] z-10">
        {selectedPokemon ? selectedPokemon.name.toUpperCase() : "PIKACHU"}
      </h1>
      <div className="relative w-[70%] h-[60%] bg-white rounded-md flex z-10">
        <img
          src={selectedPokemon ? selectedPokemon.sprites.other.dream_world.front_default : pokeImg}
          alt={selectedPokemon ? selectedPokemon.name : "Pokemon"}
          className="absolute z-10 w-[30%] top-[-10%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
        />
        <div className="absolute w-[90%] h-[10%] bg-gray-100 rounded-lg left-[50%] translate-x-[-50%] top-[15%] translate-y-[50%] flex justify-around items-center">
          <div className="flex gap-2 items-center">
            <IoScaleOutline />
            <h1>{selectedPokemon ? selectedPokemon.weight / 10 : 6}kg</h1>
          </div>

          <div className="flex gap-2 items-center">
            <GiBodyHeight />
            <h1>{selectedPokemon ? selectedPokemon.height / 10 : 0.4}m</h1>
          </div>
        </div>
        <div className="absolute bg-gray-100 w-[90%] h-[60%] rounded-lg left-[50%] top-[65%] translate-y-[-50%] translate-x-[-50%] flex flex-col items-center justify-around py-4">
          {statsList.map((item, index) => (
            <Stats key={index} stats={item} />
          ))}
        </div>
      </div>
      <img
        src={pokeBall}
        alt="Pokeball"
        className="absolute z-1 w-[50%] right-[20%] translate-x-[50%] opacity-40"
      />
    </div>
  );
}

export default Right;