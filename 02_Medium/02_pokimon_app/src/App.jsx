import React from 'react';
import { Left, Right } from './components';
import { PokemonProvider } from './store/PokemonContext';

function App() {
  return (
    <PokemonProvider>
      <main className="flex overflow-hidden select-none">
        <Left />
        <Right />
      </main>
    </PokemonProvider>
  );
}

export default App;











// import React, { useEffect, useState } from 'react';
// import { Left, Right } from './components';
// import axios from 'axios';

// function App() {
//   const [allPokemons, setAllPokemons] = useState([]);
//   const [pokeData, setPokeData] = useState([]);
//   const [selectedPokemon, setSelectedPokemon] = useState(null);
//   const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
//   const [prevUrl, setPrevUrl] = useState(null);
//   const [nextUrl, setNextUrl] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Setting loading to true before starting the API call
//     setLoading(true);
    
//     axios
//       .get(url)
//       .then((response) => {
//         setAllPokemons(response.data.results);
//         setPrevUrl(response.data.previous);
//         setNextUrl(response.data.next);
//         setLoading(false);  // Set loading to false after data is fetched
//       })
//       .catch((error) => {
//         console.error('Error fetching Pokémon data:', error);
//         setLoading(false);  // Set loading to false even on error
//       });
//   }, [url]);

//   useEffect(() => {
//     if (allPokemons.length > 0) {
//       const fetchDetails = allPokemons.map((p) =>
//         axios.get(p.url).then((res) => res.data)
//       );

//       Promise.all(fetchDetails)
//         .then((details) => {
//           setPokeData(details); // Update pokeData with all the fetched details
//         })
//         .catch((error) => {
//           console.error('Error fetching Pokémon details:', error);
//         });
//     }
//   }, [allPokemons]);

//   return (
//     <main className="flex overflow-hidden select-none">
//       <Left
//         pokeData={pokeData}
//         setSelectedPokemon={setSelectedPokemon}
//         prevUrl={prevUrl}
//         nextUrl={nextUrl}
//         setUrl={setUrl}
//         loading={loading}
//       />
//       <Right pokemon={selectedPokemon} />
//     </main>
//   );
// }

// export default App;