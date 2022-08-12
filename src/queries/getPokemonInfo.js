import url from "./queryURl";

async function getPokemonInfo(pokemon) {
  const response = await fetch(
    url + "pokemon/" + pokemon.name
  );
  const result = await response.text();
  const pokemonInfo = JSON.parse(result);
  let detailedPokemon = {
    ...pokemon,
    weight: pokemonInfo.weight,
    stats: pokemonInfo.stats.map((statObj) => {
      return { name: statObj.stat.name, baseValue: statObj.base_stat };
    }),
    id: pokemonInfo.id,
  };
  return detailedPokemon;
}

export default getPokemonInfo;
