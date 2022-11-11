import { useState,useRef,useEffect } from "react";

function useTypingGame(startingTime){
    const[textValue,setTextValue]=useState(()=>(""))
    const[disableText,setDisableText]=useState(()=>true)
    const[textCounter,setTextCounter]=useState(()=>0)
    const[countDown,setCountDown]=useState(()=>startingTime)
    const textRef=useRef(null)

    function Changer(e){
        const{value}=e.target
        setTextValue(value)
      }
              
      function turnOn(){
           if(disableText){
          setDisableText(false)
          setCountDown(10)
          setTextValue("")
             
        }
      
      }
       
  useEffect(()=>{
    const wordArray=textValue.trim().split(" ")

   setTextCounter((wordArray.filter(x=>x!=="")).length)
    console.log(textValue.trim().split(" "))
  },[textValue])


useEffect(()=>{
  console.log(textRef.current.innerText)
    const time=setTimeout(()=>{
      countDown>=1 && disableText===false ? setCountDown(prev=>prev-1) :""
    },1000)

    if(countDown==0){
      setDisableText(true)
      
    } 


return()=>clearTimeout(time)

},[countDown,disableText])
 
useEffect(()=>{
 disableText===false ? textRef.current.focus() : ""


},[disableText])

  
      return({textValue,disableText,textCounter,countDown,textRef,Changer,turnOn})


    
}
export default useTypingGame