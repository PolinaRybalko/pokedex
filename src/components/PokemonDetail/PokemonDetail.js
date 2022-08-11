import display from "../helpers/displayString";
import displayStat from "../helpers/displayStat";
import "./PokemonDetail.css";

function PokemonDetail(props) {
  console.log(props);
  const thisPokemon = props.pokemon;
  if (!thisPokemon.name) {
    return <div className="PokemonDetail__container PokemonDetail__without-border"></div>;
  }
  return (
    <div className="PokemonDetail__container">
      <img alt={`${thisPokemon.name} depiction`} src={thisPokemon.imgURL} />
      <p> {display(thisPokemon.name)} #{thisPokemon.id}</p>
      <table>
        <tbody>
          <tr>
            <td>Type</td>
            <td>{thisPokemon.types[0]}</td>
          </tr>
          {thisPokemon.stats.map(stat => {return(<tr key={stat.name}> <td>{displayStat(stat.name)}</td> <td>{stat.baseValue}</td></tr>)})}
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
