import React from "react";
import "./StarterPage.css"
export function StarterPage(props){


    return(
        <div className={props.listEmpty===true ? "startPage": "createNew"} >
        <h1>You have no notes</h1>
        <button onClick={props.createNotes}className="button--emptylist"> Create one now</button>
        </div>
    )
}