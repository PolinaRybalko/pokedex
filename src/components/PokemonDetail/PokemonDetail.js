import display from "../../helpers/displayString";
import displayStat from "../../helpers/displayStat";
import displayNumber from "../../helpers/displayNumber";
import "./PokemonDetail.css";
import noImageFound from "../../assets/no-image-found.png";

function PokemonDetail(props) {
  const thisPokemon = props.pokemon;
  if (!thisPokemon.name) {
    return (
      <div className="PokemonDetail__container PokemonDetail__without-border"></div>
    );
  }
  return (
    <div className="PokemonDetail__container">
      {thisPokemon.imgURL ? (
        <img alt={`${thisPokemon.name} depiction`} src={thisPokemon.imgURL} />
      ) : (
        <img alt={"No Depiction found"} src={noImageFound} />
      )}
      <p>
        {display(thisPokemon.name)} #{displayNumber(thisPokemon.id)}
      </p>
      <table>
        <tbody>
          <tr>
            <td>Type</td>
            <td>{thisPokemon.types[0]}</td>
          </tr>
          {thisPokemon.stats.map((stat) => {
            return (
              <tr key={stat.name}>
                <td>{displayStat(stat.name)}</td>
                <td>{stat.baseValue}</td>
              </tr>
            );
          })}
          <tr>
            <td>Weight</td>
            <td>{thisPokemon.weight}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PokemonDetail;
