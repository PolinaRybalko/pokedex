import url from "./queryURl";

async function getPokemons(offset, limit) {
  let offsetString = "&offset=" + offset;
  if (offset === 0) {
    offsetString = "";
  }
  let response = {};
  response = await fetch(url + "pokemon/?limit=" + limit + offsetString);
  const result = await response.text();
  let pokemons = {};
  pokemons = JSON.parse(result).results;
  let pokemonsList = [];
  for (let pokemon of pokemons) {
    const response = await fetch(url + "pokemon/" + pokemon.name);
    const result = await response.text();
    const properties = JSON.parse(result);
    pokemonsList.push({
      name: pokemon.name,
      imgURL: properties.sprites.front_default,
      types: properties.types.map((typeObj) => typeObj.type.name),
    });
  }
  return pokemonsList;
}

export default getPokemons;
