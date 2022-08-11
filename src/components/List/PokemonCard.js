import "./PokemonCard.css";
import display from "../../helpers/displayString";

function PokemonCard(props) {
  const thisPokemon = props.pokemon;
  function clickHandler() {
    props.onClick(thisPokemon);
  }
  return (
    <div className="PokemonCard" onClick={clickHandler}>
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
