import React from "react";
import "./App.css"
export default function Buttons(props){

return(
    
    <button className="button" onClick={props.clickMe}> {props.value}</button>
)
}