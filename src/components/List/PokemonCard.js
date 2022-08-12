import "./PokemonCard.css";
import display from "../../helpers/displayString";
import noImageFound from "../../assets/no-image-found.png";

function PokemonCard(props) {
  const thisPokemon = props.pokemon;
  function clickHandler() {
    props.onClick(thisPokemon);
  }
  return (
    <div className="PokemonCard" onClick={clickHandler}>
      {thisPokemon.imgURL ? (
        <img alt={`${thisPokemon.name} depiction`} src={thisPokemon.imgURL} />
      ) : (
        <img alt={"No Depiction found"} src={noImageFound} />
      )}
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
