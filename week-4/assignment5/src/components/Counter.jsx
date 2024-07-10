import React, { useState } from "react";

const Counter =(props)=>{
    const id = props.id;

    return(
        <div>
            <button onClick={()=>props.changeCount(id,+1)}> +1 </button>
            <span>{props.sum}</span>
        </div>
    )
}


export default Counter;