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
