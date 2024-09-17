import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokeData, setPokeData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [prevUrl, setPrevUrl] = useState(null);
  const [nextUrl, setNextUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setAllPokemons(response.data.results);
        setPrevUrl(response.data.previous);
        setNextUrl(response.data.next);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon data:', error);
        setLoading(false);
      });
  }, [url]);

  useEffect(() => {
    if (allPokemons.length > 0) {
      const fetchDetails = allPokemons.map((p) =>
        axios.get(p.url).then((res) => res.data)
      );

      Promise.all(fetchDetails)
        .then((details) => {
          setPokeData(details);
        })
        .catch((error) => {
          console.error('Error fetching Pokémon details:', error);
        });
    }
  }, [allPokemons]);

  return (
    <PokemonContext.Provider
      value={{
        allPokemons,
        pokeData,
        selectedPokemon,
        setSelectedPokemon,
        prevUrl,
        nextUrl,
        setUrl,
        loading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};