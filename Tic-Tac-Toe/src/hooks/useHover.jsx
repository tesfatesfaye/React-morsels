import React,{useState} from "react";

function useHover(){

    const[hover,setHover]=useState(false)
    function setHoverState(value){
	
        setHover(value)
      }
      


      return[hover,setHoverState]

}

export default useHover