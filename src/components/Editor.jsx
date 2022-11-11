import React, { useEffect } from "react";
import "./Editor.css"
export function Editor(props){
const styles={
    display: props.clicked ? "block" : "none"
}

const textEditor={
    display: props.edit==true ? "block": "none"
}
const textPreviewer={
    display: props.edit==false ? "block": "none"
}
useEffect(()=>{
props.lastEdit()
},[props.text])


return(
    <div className="editor" style={styles}>
        
     <div className='button-holder'>
        <button onClick={props.editMe} className="editor-button"> Write</button> 
        <button onClick={props.preview}className="editor-button">Preview</button>
        </div>
        <div className="edit-form"  style={textEditor}>
        <form className="text-form">
        <textarea
        name="text"
        value={props.text}
        onChange={(event)=>props.handleChange(event,props.id)}
        className="text-area"
             />
        </form>
        </div>
        <div className="displayed" style={textPreviewer}>
            <blockquote><h1>{props.text || `${props.title} is empty`}</h1></blockquote>
        </div>
    </div>
)


}