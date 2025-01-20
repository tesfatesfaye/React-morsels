import React, { useState,useEffect } from 'react'
import './App.css'
import Confetti from 'react-confetti'
import Dicecomponent from './components/Dicecomponent'
import {nanoid} from "nanoid"
export default function App(){

const[die,setDie]=useState(createArray())
const[victory,setVictory]=useState(false)

useEffect(()=>{
  function checker(){
    let baseline=die[0].value
    die.every(x=>x.value===baseline) ? setVictory(true) : setVictory(false)
  }
 

function me(){
  die.every(x=>x.isClicked==true) ? checker() : "" 
}
 me()
}
  ,[die])  
  function createArray(){
    const dieArray=[]
    for(let i=1;i<=10;i++){
    const obj={}
    obj.id=nanoid()
    obj.value=Math.ceil(Math.random()*6)
    obj.isClicked=false
    dieArray.push({...obj})
    }
  return(dieArray)}


  
function ifVictory(){
   setDie(prev=>{
    return prev.map(x=>{
    return{...x, isClicked:false, value:Math.ceil(Math.random()*6)}
    })  })


setVictory(false)
 }



     function clickedDie(id){
           
    setDie(prev=>{
    return prev.map(x=>{
    return(x.id===id ? {...x, isClicked:!x.isClicked} :{...x})
    })  })}
const[buttonText,setButtonText]=useState("Roll")
useEffect(()=>{
  victory===true ? setButtonText("Rest Game") : setButtonText("Roll")
},[victory])
const dieProps=die.map(x=>{
  return(
    <Dicecomponent 
    key={x.id}
    clickedDie={()=>clickedDie(x.id)} 
    {...x}
    victory={victory}
    />
  )
})
function throwDie(){
  setDie(prev=>{
    return prev.map(x=>{
      return( x.isClicked==false ? {...x, value: Math.ceil(Math.random()*6)} : {...x})
         })  })
        
        }
  return (
    <main className="App">
      {victory===true ? <Confetti width={window.innerWidth} height={window.innerHeight}/> : ""}
      <div className='content'>
      <h1 className="title">Tenzies</h1>
            <p className='subTitle'>Roll until all dice are the same. 
              Click each die to freeze it at its current value between rolls.</p>
            <div className='dieParent'>
            {dieProps}
            </div>
            <button onClick={victory===true ? ifVictory :throwDie}className='roll'>{buttonText}</button>
            </div>
    </main>
  )
}


