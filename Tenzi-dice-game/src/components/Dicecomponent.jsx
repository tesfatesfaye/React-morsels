import React from "react";
import './die.css'


export default function Dicecomponent(props){

    const style={
        
        backgroundColor: props.isClicked==true ? "#59E391" :  "black"
        
    }


    return(
        <div style={style}onClick={props.victory ? "" : props.clickedDie}className="dice">
        <img className="image"src={`images/${props.value}.svg`}/>
        
       
        </div>


        
    )


}