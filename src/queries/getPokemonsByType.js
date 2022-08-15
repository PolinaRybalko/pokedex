import url from "./queryURl";

async function getPokemonsByType(offset, type, limit) {
  let response = {};
  response = await fetch(url + "type/" + type);
  const result = await response.text();
  let pokemons = {};
  pokemons = JSON.parse(result).pokemon;
  let pokemonsList = [];
  let indexOfPokemon = 0;
  for (let pokemonObj of pokemons) {
    indexOfPokemon += 1;
    const pokemon = pokemonObj.pokemon;
    if (indexOfPokemon <= offset) {
      continue;
    }
    const response = await fetch(url + "pokemon/" + pokemon.name);
    const result = await response.text();
    const properties = JSON.parse(result);
    pokemonsList.push({
      name: pokemon.name,
      imgURL: properties.sprites.front_default,
      types: properties.types.map((typeObj) => typeObj.type.name),
    });
    if (pokemonsList.length === limit) {
      break;
    }
  }
  return pokemonsList;
}

export default getPokemonsByType;
