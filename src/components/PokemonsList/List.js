import { useEffect, useRef, useState } from "react";
import PokemonCard from "./PokemonCard";
import TypeButton from "../TypeButton/TypeButton";
import getPokemons from "../../queries/getPokemons";
import getPokemonsByType from "../../queries/getPokemonsByType";
import "./List.css";

function List(props) {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  let displayedPockemonsNumber =
    window.screen.width < 600 ? 3 : window.screen.width < 800 ? 6 : 12;
  function loadPokemonsHandler() {
    setOffset((prevState) => prevState + displayedPockemonsNumber);
  }
  function viewPokemonHandler(pokemon) {
    props.onShowPokemon(pokemon);
  }

  function selectTypeHandler(type) {
    setOffset(0);
    props.onSelectType(type);
  }

  function removeTypeHandler() {
    setOffset(0);
    props.onRemoveType();
  }

  let type = useRef();

  useEffect(() => {
    if (type.current !== props.type) {
      setOffset(0);
    }
    let displayedPockemonsNumber =
      window.screen.width < 600 ? 3 : window.screen.width < 800 ? 6 : 12;
    setIsLoading(true);
    let list = [];
    async function fetchPokemons() {
      if (props.type) {
        list = await getPokemonsByType(
          offset,
          props.type,
          displayedPockemonsNumber
        );
        setPokemonsList(list);
      } else {
        list = await getPokemons(offset, displayedPockemonsNumber);
        setPokemonsList(list);
      }
      if (list.length === 0) {
        if (offset > 0) {
          setOffset(0);
        } else {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    }
    fetchPokemons();
    type.current = props.type;
  }, [offset, props.type, displayedPockemonsNumber]);
  return (
    <div className="List__container">
      {props.type && (
        <div className="List__type-button-container">
          <TypeButton
            onClick={removeTypeHandler}
            type={props.type}
            key={props.type}
          />
        </div>
      )}

      {isLoading || pokemonsList.length === 0 ? (
        pokemonsList.length === 0 ? (
          <p>No Pokemons of this type found.</p>
        ) : (
          <p>Loading... Please, wait</p>
        )
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
