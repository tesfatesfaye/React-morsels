import React,{useState,useEffect,useRef} from "react";
 
    function useHover(){

        const[hovered,setHovered]=useState(false)
        const[cartAdd,setCartAdd]=useState(false)
         const toggleCartAdd=(x)=>(setCartAdd(x))
        const ref=useRef()
        const enter=()=>{
           return  setHovered(true)
        }
        const leave=()=>{
            return setHovered(false)
        }

        useEffect(() => {
            ref.current.addEventListener("mouseenter", enter)
            ref.current.addEventListener("mouseleave", leave)
            
                      
        }, [])
        

        return[hovered,cartAdd,toggleCartAdd,ref]
    }


    export default useHover