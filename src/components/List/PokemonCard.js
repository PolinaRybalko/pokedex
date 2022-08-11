import "./PokemonCard.css";

function PokemonCard(props) {
  const thisPokemon = props.pokemon;
  return (
    <div className="PokemonCard">
      <img alt={`${thisPokemon.name} depiction`} src={thisPokemon.imgURL} />
      {thisPokemon.name}
    </div>
  );
}

export default PokemonCard;
