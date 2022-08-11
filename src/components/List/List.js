import { useState } from "react";
import PokemonCard from "./PokemonCard";

function List(props) {
    const [pokemonsList, setPokemonsList] = useState([]);
    return(
        <div>{pokemonsList.map(pokemon => <PokemonCard pokemon = {pokemon}/>)}</div>
    )
}

export default List;