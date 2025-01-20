import React, {useState,useEffect}from 'react'
import './App.css'
import Comp from './comp'
import Buttons from './buttons'

function App() {

const [col,setCol]=useState("")
const [butt,setButt]=useState(()=>[])
const [replay,setReplay]=useState(true)
const [right,setRight]=useState("")


  useEffect(()=>{
    const colors =()=>{
    let value=Math.floor(Math.random()*255).toString(16)
       value.length===1 ? value='0'+value : ""
    return value
  }
  
      const x=`#${colors()}${colors()}${colors()}`
    setCol(x)
    console.log(x)
      const y=`#${colors()}${colors()}${colors()}`
        const z=`#${colors()}${colors()}${colors()}`
    const arry=[]
    arry.push(y,z)
    let set=Math.floor(Math.random()*3)
    arry.splice(set,0,x)
    setButt(arry)

   

  },[replay])





  function clickMe(value){
        value===col ? setRight("correct") : setRight("Wrong answer")
    setReplay(prev=> !prev)
         }
 
  const buttonsetter=butt.map(x=>{
    return(
      <Buttons
      key={x}
      value={x}
      clickMe={()=>clickMe(x)}
      />
    )
  })

  const style={
    color: right==="correct" ? "green" : "orange"
  }




  return (
  <div className='app'>
    <h1 style={{color:col}}>Color Guessing Game</h1>
    <Comp
    col={col}
    />
  <div className='appChild'>
    {buttonsetter}
  </div>
  <div style={style}><h2>{right}</h2></div>
  </div>
  )
}

export default App
