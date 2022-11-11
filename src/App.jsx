import { useState, useEffect } from 'react'
import {nanoid} from "nanoid"
import './App.css'
import TicTac from './TicTac'
import Confetti from 'react-confetti'

function App() {

 const[gameProps,setGameProps]=useState(createTicTac())
  const[round,setRound]=useState(()=>1)
  const[player,setPlayer]=useState("X")
  const [victory,setVictory]=useState(false)
  const[tie,setTie]=useState(false)
  const[hover,setHover]=useState(false)
     
  useEffect(()=>{
    gameProps.every(x=>x.clicked===true) ? setTie(true) : setTie(false)
  
  },[gameProps])

useEffect(()=>{
  tie===true ? setVictory(true) : ''


},[tie])


 useEffect(()=>{
 gameProps.map((x,index)=>{
  if(x.value){
  if(index===0 || index%3===0){
    
    if( x.value===gameProps[index+1].value && gameProps[index+1].value===gameProps[index+2].value){
      return  setVictory(true)
             }
      }
   if(index<=2){
             if( x.value===gameProps[index+3].value && gameProps[index+3].value===gameProps[index+6].value){
          return setVictory(true)
         }
            }
 
      if(index===0){
        if( x.value===gameProps[4].value && gameProps[4].value===gameProps[8].value){
          return setVictory(true)
        }
      }

        if(index===2){
          if( x.value===gameProps[4].value && gameProps[4].value===gameProps[6].value){
            return setVictory(true)
          }
        }
       }})

},[gameProps])


  useEffect(()=>{
    round%2===0 ? setPlayer("O") : setPlayer("X")
  },[round])


  function nextRound(){
    setRound(prev=> prev+1)
  }
  
  function whenClicked(val){
    if(val.clicked===false){
       setGameProps(prev=>{
      return prev.map(x=>{
        return x.id===val.id  ? {...x,clicked:true,value:player} :x
      })
    })
   
  nextRound()
    }
  }

  function createTicTac(){
    let array=[]
    
    for(let i=0;i<9;i++){
      array[i]={id:nanoid(), value:undefined, clicked:false, placement:i+1}
    }

    return array
  }

  function newGame(){
    setGameProps(createTicTac())
    setRound(1)
    setVictory(false)
    setPlayer("X")
    setTie(false)
  }



  function setHoverState(value){
	
    setHover(value)
  }
  

  const gameSetter=(gameProps.map(x=>{
    return(
      <TicTac
      key={x.id}
      {...x}
      player={player}
      whenClicked={()=>whenClicked(x)}
      victory={victory}
      setHoverState={setHoverState}
      hover={hover}
      />
    )
  }))

  


  return (
    <div className='parent'>
       {victory===true ? <Confetti  width={window.innerWidth}/> : ""}
      <h1 className='title' style={victory===true && player==="X" ? {color:'#FF5733'} :{color:'#39a0ca'}}>Tic Tac Toe</h1>
       <div className="App">
      {gameSetter}
      
    </div>
    <div className='victory' style={victory ? {display :"flex"} : {display: "none"}}>
    
    {tie ? <h1 className='victoryText'>Its a tie</h1> : <h1 className={`victoryText ${player==="X" ? "y" : "x"}`}>{player==="X" ? "Player Two has won" : "Player One has won"}</h1> }
    
    <button className='buttonCSS' onClick={newGame}>Replay</button>
    </div>
     
    </div>
  )
}

export default App
