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
    <div className="List">
      {pokemonsList.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.name}/>
      ))}
    </div>
  );
}

export default List;
