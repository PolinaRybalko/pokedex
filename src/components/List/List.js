import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import getPokemons from "../../queries/getPokemons";
import "./List.css";
import colorOfType from "../../helpers/colorOfType";
import display from "../../helpers/displayString";

function List(props) {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let displayedPockemonsNumber = 12;
  console.log(window.screen.width)
  if (window.screen.width < 600)
  {
    displayedPockemonsNumber = 6;
  }
  function loadPokemonsHandler() {
    setOffset((prevState) => prevState + displayedPockemonsNumber);
  }

  function viewPokemonHandler(pokemon) {
    props.onShowPokemon(pokemon);
  }

  function selectTypeHandler(type) {
    setOffset(0);
    setType(type);
  }

  function removeTypeHandler() {
    setOffset(0);
    setType("");
  }

  useEffect(() => {
    setIsLoading(true);
    getPokemons(offset, type, displayedPockemonsNumber).then((list) => {
      setPokemonsList(list);
      if (list.length === 0) {
        setOffset(0);
      } else {
        setIsLoading(false);
      }
    });
  }, [offset, type, displayedPockemonsNumber]);
  return (
    <div className="List__container">
      {type && (
        <div>
          <button
            style={{
              background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.99), ${colorOfType(
                type
              )})`,
            }}
            onClick={removeTypeHandler}
            className="List__type-button"
          >
            {display(type)}
          </button>
        </div>
      )}

      {isLoading ? (
        <p>Loading... Please, wait</p>
      ) : (
        <div className="List__list">
          {pokemonsList.map((pokemon) => (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.name}
              onClick={viewPokemonHandler}
              onSelectType={selectTypeHandler}
            />
          ))}
        </div>
      )}
      <button className="List__button" onClick={loadPokemonsHandler}>
        Load More
      </button>
    </div>
  );
}

export default List;
