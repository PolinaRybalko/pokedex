async function getPokemons(offset) {
  let offsetString = "&offset=" + offset;
  if (offset === 0) {
    offsetString = "";
  }
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=12" + offsetString
  );
  const result = await response.text();
  const pokemons = JSON.parse(result).results;
  let pokemonsList = [];
  for (let pokemon of pokemons) {
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
  return(pokemonsList);
}

export default getPokemons;
