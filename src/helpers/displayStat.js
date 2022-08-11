import display from "./displayString";

function displayStat(statName)
{
    switch(statName){
        case "hp":
            return("HP");
        case "special-attack":
            return("SP attack");
        case "special-defense":
            return("SP defense");
        default: return(display(statName));
    }
}

export default displayStat;