import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import getPokemons from "./queries/getPokemons";
import "./List.css";

function List(props) {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [offset, setOffset] = useState(0);
  function loadPokemoonsHandler()
  {
    setOffset((prevState) => prevState + 12);
  }
  useEffect(() => {
    getPokemons(offset).then((list)=>{setPokemonsList(list)});
  }, [offset]);
  return (
    <div className="List__container">
    <div className="List__list">
      {pokemonsList.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.name}/>
      ))}
      </div>
      <button className="List__button" onClick={loadPokemoonsHandler}>Load More</button>
    </div>
  );
}

export default List;
