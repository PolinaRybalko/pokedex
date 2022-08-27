import url from "./queryURl";

async function getPokemonsByType(offset, type, limit) {
  let response = {};
  response = await fetch(url + "type/" + type);
  const result = await response.text();
  let pokemons = {};
  pokemons = JSON.parse(result).pokemon;
  let pokemonsListPromises = [];
  let indexOfPokemon = 0;
  for (let pokemonObj of pokemons) {
    indexOfPokemon += 1;
    const pokemon = pokemonObj.pokemon;
    if (indexOfPokemon <= offset) {
      continue;
    }
    pokemonsListPromises.push(
      fetch(url + "pokemon/" + pokemon.name).then((response) => response.json())
    );
    if (pokemonsListPromises.length === limit) {
      break;
    }
  }
  const pokemonsList = await Promise.all(pokemonsListPromises);
  return pokemonsList.map((pokemon) => {
    return {
      name: pokemon.name,
      imgURL: pokemon.sprites.front_default,
      types: pokemon.types.map((typeObj) => typeObj.type.name),
    };
  });
}

export default getPokemonsByType;
