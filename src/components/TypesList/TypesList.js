import { useState, useEffect } from "react";
import getTypes from "../../queries/getTypes";
import TypeButton from "../TypeButton/TypeButton";

function TypesList(props) {
  const [typesList, setTypesList] = useState([]);
  useEffect(() => {
    getTypes().then((list) => {
      setTypesList(list);
    });
  }, []);
  function selectTypeHandler(type) {
    props.onSelectType(type);
  }
  return (
    <div>
      {typesList.map((type) => (
        <TypeButton onClick={selectTypeHandler.bind(undefined, type)} type={type} key={type}/>
      ))}
    </div>
  );
}

export default TypesList;
