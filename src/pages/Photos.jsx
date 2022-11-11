import React,{useContext} from "react";
import "../App.css"
import {getClass} from "../utils/index"
import Images from "../components/Image"
import {ThemeContext} from "../themeContext"
import { nanoid } from 'nanoid'
function Photos() {
    const{allPhotos, toggleFavorite}=useContext(ThemeContext)
   
    const mappedPics=allPhotos.map((x,i)=>{
        return(<Images
            key={nanoid()}
            img={allPhotos[i]}
            i={i}
            url={x.url}
            classNames={getClass}
            isFavorite={x.isFavorite}
            toggleFavorite={(event)=>toggleFavorite(event,x.id)}
          
        />)
    })


    return (
        <main className="photos">
            {mappedPics}

        </main>
    )
}

export default Photos