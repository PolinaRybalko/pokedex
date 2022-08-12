async function getPokemons(offset, type = "") {
  let offsetString = "&offset=" + offset;
  if (offset === 0) {
    offsetString = "";
  }
  let response = {};
  if (type) {
    response = await fetch("https://pokeapi.co/api/v2/type/" + type);
  } else {
    response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=12" + offsetString
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
      "https://pokeapi.co/api/v2/pokemon/" + pokemon.name
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
