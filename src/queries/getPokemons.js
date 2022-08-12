import url from "./queryURl";

async function getPokemons(offset, type = "") {
  let offsetString = "&offset=" + offset;
  if (offset === 0) {
    offsetString = "";
  }
  let response = {};
  if (type) {
    response = await fetch(url + "type/" + type);
  } else {
    response = await fetch(
      url + "pokemon/?limit=12" + offsetString
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
  for (let pokemonObj of pokemons) {
    const pokemon = type ? pokemonObj.pokemon : pokemonObj;
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
  }
  if (type) {
    return pokemonsList.slice(offset, offset + 12);
  } else {
    return pokemonsList;
  }
}

export default getPokemons;
