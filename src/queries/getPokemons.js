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
  let pokemonsList = await Promise.all(
    pokemons.map((pokemon) =>
      fetch(url + "pokemon/" + pokemon.name).then((response) => response.json())
    )
  );
  return pokemonsList.map((pokemon) => {
    return {
      name: pokemon.name,
      imgURL: pokemon.sprites.front_default,
      types: pokemon.types.map((typeObj) => typeObj.type.name),
    };
  });
}

export default getPokemons;
