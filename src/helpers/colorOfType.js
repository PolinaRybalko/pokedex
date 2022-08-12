function colorOfType(type) {
  switch (type) {
    case "bug":
      return "rgb(33, 235, 33)";
    case "dark":
      return "rgb(146, 66, 0)";
    case "dragon":
      return "rgb(202, 42, 202)";
    case "electric":
      return "yellow";
    case "fairy":
      return "pink";
    case "fighting":
      return "red";
    case "fire":
      return "rgb(255, 123, 0)";
    case "flying":
      return "rgb(241, 150, 241)";
    case "ghost":
      return "rgb(164, 97, 209)";
    case "grass":
      return "rgb(57, 177, 57)";
    case "ground":
      return "rgb(233, 210, 166)";
    case "ice":
      return "rgb(73, 227, 238)";
    case "normal":
      return "white";
    case "poison":
      return "rgb(255, 158, 174)";
    case "psychic":
      return "rgb(248, 66, 178)";
    case "rock":
      return "rgb(172, 141, 83)";
    case "steel":
      return "rgb(143, 143, 143)";
    case "shadow":
      return "rgb(194, 194, 194)";
    case "unknown":
      return "rgb(107, 129, 25)";
    case "water":
      return "rgb(85, 130, 255)";
    default:
        return "white";
  }
}

export default colorOfType;
