import React from "react";
import "./Notescomp.css"
export function Notescomp(props){
    const style={
        backgroundColor: props.clicked ? "#4A4E74": "whitesmoke"
    }
    
    return(
       <div onClick={props.clickNote}className="notes-title" style={style}>
        <h3 className="title-text">{(props.text.split("\n")[0]) || props.title}</h3>
        <button 
                    className="delete-btn"
                    onClick={(event)=>{props.deleteNote(event,props.id)}}
                >
                    <i className="gg-trash trash-icon"></i>
                </button>
       </div> 
    )
}


