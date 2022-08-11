import { useState } from "react";
import "./App.css";
import List from "./components/List/List";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import getPokemonInfo from "./queries/getPokemonInfo";

function App() {
  const [chosenPokemon, setChosenPokemon] = useState({});
  function showPokemonHandler(pokemon) {
    getPokemonInfo(pokemon).then((detailedPokemon) => setChosenPokemon(detailedPokemon));
  }
  return (
    <div className="App">
      <header className="App__header">Pokedex</header>
      <div className="App__container">
        <List onShowPokemon={showPokemonHandler} />
        <PokemonDetail pokemon={chosenPokemon} />
      </div>
    </div>
  );
}

export default App;
