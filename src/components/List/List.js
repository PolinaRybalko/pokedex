import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import getPokemons from "./queries/getPokemons";
import "./List.css";

function List(props) {
  const [pokemonsList, setPokemonsList] = useState([]);
  useEffect(() => {
    getPokemons(0).then((list)=>{setPokemonsList(list)});
  }, []);
  return (
    <div className="List__container">
    <div className="List__list">
      {pokemonsList.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.name}/>
      ))}
      </div>
      <button className="List__button">Load More</button>
    </div>
  );
}

export default List;
