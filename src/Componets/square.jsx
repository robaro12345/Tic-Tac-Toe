import React from "react";


function square (props) {
    return (
    
    <div onClick={()=>props.handleClick(props.id)} className="square">
        {(props.play) && <h1 className="players">{props.play}</h1>}
    </div>
    )
}

export default square;