import React from 'react'
import './App.css'
import useTypingGame from './hooks/useGameLogic'
function App() {

  const {textValue,disableText,textCounter,
  countDown,textRef,Changer,turnOn}=useTypingGame(10)



  return (
    <div className="App">
     <h1> How fast do you type?</h1>

      <textarea style={{background: disableText ? "grey" :"#00b800"}}
      name="text-area"
      ref={textRef}
      value={textValue}
      disabled={disableText}
      onChange={Changer}
      />
      <div className='flex-div'>
      <h1>Time remaining:</h1>
    <h4>{countDown}</h4>

      </div>
   
    <button style={disableText ? {cursor: "pointer"} : {cursor:"not-allowed", color:"grey"} }onClick={turnOn}>START</button>
    <h1>Word count:{countDown===0 ? textCounter: "???"}</h1>


    </div>
  )
}

export default App
