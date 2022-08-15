import colorOfType from "../../helpers/colorOfType";
import display from "../../helpers/displayString";
import "./TypeButton.css"

function TypeButton(props) {
    return(
        <button
          style={{
            background: `linear-gradient(to bottom, rgba(255, 255, 255, 0.99), ${colorOfType(
              props.type
            )})`,
          }}
          key={props.type}
          className="TypeButton__type-button"
          onClick={props.onClick}
        >
          {display(props.type)}
        </button>
    )
}

export default TypeButton;