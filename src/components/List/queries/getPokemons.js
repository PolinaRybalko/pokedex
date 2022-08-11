async function getPokemons(offset) {
  let offsetString = "&offset=" + offset;
  if (offset === 0) {
    offsetString = "";
  }
  const result = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=12" + offsetString
  );
  const response = await result.text();
  const pokemons = await JSON.parse(response).results;
  console.log(pokemons);
  let pokemonsList = [];
  for (let pokemon of pokemons) {
    const result = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokemon.name
    );
    const response = await result.text();
    const properties = await JSON.parse(response);
    pokemonsList.push({
      name: pokemon.name,
      imgURL: properties.sprites.front_default,
      types: properties.types.map((typeObj) => typeObj.type.name),
    });
  }
  return(pokemonsList);
}

export default getPokemons;
