import React from "react";
import './Button.css';

function Button(props) {
    return (
        <div className="addBtn">{props.name}</div>
    )
}

export default Button;