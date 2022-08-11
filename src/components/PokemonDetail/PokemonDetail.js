import display from "../helpers/displayString";
import displayStat from "../helpers/displayStat";

function PokemonDetail(props) {
  console.log(props);
  const thisPokemon = props.pokemon;
  if (!thisPokemon.name) {
    return <div></div>;
  }
  return (
    <div>
      <img alt={`${thisPokemon.name} depiction`} src={thisPokemon.imgURL} />
      {display(thisPokemon.name)}
      <table>
        <tbody>
          <tr>
            <td>Type</td>
            <td>{thisPokemon.types[0]}</td>
          </tr>
          {thisPokemon.stats.map(stat => {return(<tr> <td>{displayStat(stat.name)}</td> <td>{stat.baseValue}</td></tr>)})}
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
