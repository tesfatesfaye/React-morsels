import React, {useState} from "react";
import useHover from "./hooks/useHover";
import './App.css'
export default function TicTac(props){
    const[hover,setHoverState]=useHover()
    const mainStyle=()=>{
        if(props.clicked===true){
            if(props.value==="X"){
                return {backgroundColor:"#5F8575"}
            }
            else{
                return{backgroundColor:"#FF5733"}
            }
        }
    else if(hover===true){
        return { backgroundColor:"#2c3968"}
    }
    }

   
    const hoverStyle={
        display: hover ? "block" : "none"
    }

    function overMe(){
        props.clicked ===false && props.victory===false? setHoverState(true) : setHoverState(false)
    }
    function outOfMe(){
        setHoverState(false)
    }
    



    return(
        <div className="tic" onClick={props.victory===false ? props.whenClicked : ""} onMouseEnter={overMe} onMouseLeave={outOfMe} style={mainStyle()}> 
        {props.value ? <h1 className="gameValue">{props.value}</h1> : <h1 className="hoverValue" style={hoverStyle}>{props.player}</h1>}
        </div>
    )

}