import url from "./queryURl";

async function getPokemons(offset, type, limit) {
  let offsetString = "&offset=" + offset;
  if (offset === 0) {
    offsetString = "";
  }
  let response = {};
  if (type) {
    response = await fetch(url + "type/" + type);
  } else {
    response = await fetch(
      url + "pokemon/?limit=" + limit + offsetString
    );
  }
  const result = await response.text();
  let pokemons = {};
  if (type) {
    pokemons = JSON.parse(result).pokemon;
  } else {
    pokemons = JSON.parse(result).results;
  }
  let pokemonsList = [];
  let indexOfPokemon = 0;
  for (let pokemonObj of pokemons) {
    indexOfPokemon += 1;
    const pokemon = type ? pokemonObj.pokemon : pokemonObj;
    if (type && indexOfPokemon < offset)
    {
      continue;
    }
    const response = await fetch(
      url + "pokemon/" + pokemon.name
    );
    const result = await response.text();
    const properties = JSON.parse(result);
    pokemonsList.push({
      name: pokemon.name,
      imgURL: properties.sprites.front_default,
      types: properties.types.map((typeObj) => typeObj.type.name),
    });
    if (pokemonsList.length === 12)
    {
      break;
    }
  }
  return pokemonsList;
}

export default getPokemons;
