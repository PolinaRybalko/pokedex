async function getPokemonInfo(pokemon) {
  const result = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemon.name
  );
  const response = await result.text();
  const pokemonInfo = await JSON.parse(response);
  let detailedPokemon = {
    ...pokemon,
    weight: pokemonInfo.weight,
    stats: pokemonInfo.stats.map((statObj) => {
      return { name: statObj.stat.name, baseValue: statObj.base_stat };
    }),
  };
  return detailedPokemon;
}

export default getPokemonInfo;
