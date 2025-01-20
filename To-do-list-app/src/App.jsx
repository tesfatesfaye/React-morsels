import React, { useState, useEffect } from 'react'
import { StarterPage } from './components/starterPage';
import { Notescomp } from './components/Notescomp';
import Split from 'react-split'
import { nanoid } from 'nanoid';
import { Editor } from './components/Editor';
import './App.css'

function App() {

const[listEmpty,setListEmpty]=useState(()=>{

  return JSON.parse(localStorage.getItem("listy")) === false ? false : true})

  
const [notes,setNotes]=useState(()=>( JSON.parse(localStorage.getItem("savedNotes")).reverse() ?? []))



  useEffect(() => {
    
     localStorage.setItem("savedNotes", JSON.stringify(notes))
     console.log(JSON.stringify(notes))

}, [notes])

 
 useEffect(()=>{
    notes.length===0 ? setListEmpty(true) :setListEmpty(false)
   
      notes.every(x=>x.clicked===false) ? clickNotetwo() : ""

    
  
},[notes])


 
useEffect(() => {
      localStorage.setItem("listy", JSON.stringify(listEmpty))
  }, [listEmpty])
  

function deleteNote(event,id){
   event.stopPropagation()
  setNotes(prev=>prev.filter(x=>{
    return x.id !== id 
    })
    
  )
}

function lastEdit(id){
    setNotes(prev=>{
  const newArray=[]
  prev.map(x=>x.id===id ? newArray.unshift({...x}) : newArray.push({...x}))
  return [...newArray]
    })
    }


function addNote(){
  const notesLength=notes.length+1
  const newArray=[]
  notes.map(x=>{
   return newArray.push({...x})
  })

   setNotes([{id: nanoid(), title:`Note-${notesLength}`,text:"# Type your markdown note's title here",clicked:false,edit:true}, ... newArray])
    
}
function clickNote(id){
 
  setNotes(prev=>{
    return prev.map(x=>{
      return x.id===id ? {...x,clicked:true} : {...x, clicked:false}
    })
  })
}
function editMe(id){
 
  setNotes(prev=>{
  return prev.map(x=>{
    return x.id===id ? {...x, edit:true} : x
  })
 })
}
function preview(id){
    setNotes(prev=>{
    return prev.map(x=>{
      return x.id===id ? {...x, edit:false} : x
    })
   })
}

function handleChange(event,id){
  
   const{name,value}=event.target;
setNotes(prev=>{
  return prev.map(x=>{
  return x.id===id ? {...x, [name]:value}: x
  })
})

}

 function createNotes(){
  setListEmpty(false)
  notes.length===0 ? setNotes([{id:nanoid(), title:"Note-1",text:"# Type your markdown note's title here",clicked:true,edit:true}]) :""

 }

 function clickNotetwo(){
  if(notes.length>0){
  const idChecker=notes[0].id
  setNotes(prev=>{
    return prev.map(x=>{
    return x.id==idChecker ? {...x, clicked:true} : {...x,clicked:false}
    })
  
  })




}
 }


 const notesArray=notes.map(x=>{
  return(
    <Notescomp
    deleteNote={deleteNote}
    clickNote={()=>clickNote(x.id)}
     key={x.id}
     {...x}
     />
  )
 })
const editor=notes.map(x=>{
  return(<Editor
  key={x.id}
  {...x}
  handleChange={handleChange}
  editMe={()=>editMe(x.id)}
  preview={()=>preview(x.id)}
  lastEdit={()=>lastEdit(x.id)}
  />)
})

  return (
    <div className="App">
      <StarterPage 
      listEmpty={listEmpty}
      createNotes={createNotes}
    />

    <div className={listEmpty===true ? "noNotes" : "componentParent"}>
     <Split
      sizes={[20,79]}
      direction="horizontal" 
      className='split'
     >
     <div className='parentSidebar'>
        <div className='header-sidebar'>
        <h1 className='headerText'>Notes</h1>
        <button onClick={addNote}className='first-note'>+</button>
        </div>
        {notesArray}
            </div>

            <div className='content'>
              {editor}
        
      </div>
   
     </Split>
      
          
     
     
  </div>
    </div>
  )

  }
export default App
