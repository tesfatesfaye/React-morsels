import React, { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const localValue = JSON.parse(localStorage.getItem("stack"))
    console.log(localValue)
    if (localValue) {
      setStack(localValue);
    }


  }, [])

  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.key === 'v') {
  //       // Add to stack from clipboard
  //       navigator.clipboard.readText().then((clipText) => {
  //         setStack([clipText, ...stack]);
  //       });
  //     } else if (e.key === '=') {
  //       // Remove from stack and copy to clipboard
  //       if (stack.length > 0) {
  //         const [top, ...rest] = stack;
  //         navigator.clipboard.writeText(top).then(() => {
  //           setStack(rest);
  //           // alert('Top of stack copied to clipboard');
  //         });
  //       }
  //     }
  //   };

  //   window.addEventListener('keydown', handleKeyDown);

  //   return () => {
  //     window.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, [stack]);

  const handleAdd = () => {
    if (inputValue === '') return;
    setStack([inputValue, ...stack]);
    localStorage.setItem("stack", JSON.stringify([inputValue, ...stack]))
    setInputValue('');
  };

  const copy = () => {
    let [top, ...rest] = stack;
    navigator.clipboard.writeText(top).then(() => {
      setStack(rest);
      localStorage.setItem("stack", JSON.stringify(rest))
      // alert('Top of stack copied to clipboard');
    });
  }
  const enter = (e) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      handleAdd();
    }
  }

  return (
    <div className='App'>
      <h1>{stack.length}</h1>
      <textarea
        value={inputValue}
        onKeyDown={(e) => enter(e)}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAdd}>Add to Stack</button>
      <button onClick={copy}>Copy</button>
      <ul>
        {stack.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
