import "./PokemonCard.css";

function PokemonCard(props) {
    function display(string)
    {
        return (string[0].toUpperCase() + string.slice(1));
    }
  const thisPokemon = props.pokemon;
  return (
    <div className="PokemonCard">
      <img alt={`${thisPokemon.name} depiction`} src={thisPokemon.imgURL} />
      {display(thisPokemon.name)}
      <div className="PokemonCard__types">
        {thisPokemon.types.map((type) => (
          <button key={thisPokemon.name + type}>{display(type)}</button>
        ))}
      </div>
    </div>
  );
}

export default PokemonCard;
