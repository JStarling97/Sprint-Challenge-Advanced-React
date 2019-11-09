import React, { useState } from 'react';
import { useLocalStorage } from './Hooks/LocalStorage'
import './App.css';

function App(props) {

  const[player, setPlayer] = useLocalStorage('player', 'country');
  const[search, setSearch] = useLocalStorage('search', 1)

  return (
    <div className="App">
      <h1>Women's World Cup - 2019</h1>
      <select value={player} onChange={e => setPlayer(e.target.value)}></select>

      <input type="number" placeholder="Search Number" value={search} onChange={e => setSearch(e.target.value)} />
    </div>
  );
}

export default App;
