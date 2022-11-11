import React from "react";
import './App.css'
export default function Comp(props){

    const style={
        backgroundColor: props.col
    }


    return(
        <div className="comp" style={style}>
            
        </div>
    )

}
