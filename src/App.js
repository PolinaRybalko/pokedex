import { useState } from "react";
import "./App.css";
import List from "./components/PokemonsList/List";
import TypesList from "./components/TypesList/TypesList";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import getPokemonInfo from "./queries/getPokemonInfo";

function App() {
  const [type, setType] = useState("");
  const [chosenPokemon, setChosenPokemon] = useState({});
  function showPokemonHandler(pokemon) {
    getPokemonInfo(pokemon).then((detailedPokemon) => setChosenPokemon(detailedPokemon));
  }

  function selectTypeHandler(type) {
    setType(type);
  }

  function removeTypeHandler(type) {
    setType("");
  }
  return (
    <div className="App">
      <header className="App__header">Pokedex</header>
      <div className="App__container">
        <List type={type} onSelectType={selectTypeHandler} onRemoveType={removeTypeHandler} onShowPokemon={showPokemonHandler} />
        <div className="App__second-column"> <TypesList onSelectType={selectTypeHandler}/> <PokemonDetail pokemon={chosenPokemon} /> </div>
      </div>
    </div>
  );
}

export default App;
