import React,{useEffect,useContext} from "react";
import '../App.css'
import useHover from "../hooks/useHover";
import PropTypes from 'prop-types';
import { ThemeContext } from "../themeContext";

function Images({classNames,i,toggleFavorite,img}){
    const[hovered,cartAdd,toggleCartAdd,ref]=useHover()
 const {addItems,cartItems,removeItem}=useContext(ThemeContext)
const styles={ visibility: hovered ?  "visible" : "hidden"}
const heartIcon= img.isFavorite && <i onClick={toggleFavorite}className="ri-heart-line favorite " ></i> ||
hovered && <i onClick={toggleFavorite}className="ri-heart-line favorite " ></i> 


const cartIcon=()=>{
    if(cartAdd){
   return <i className="ri-shopping-cart-fill cart" onClick={(event)=>{ removeItem(event,img.id)}}></i>   
    }
    else if(hovered){
        return   <i  className="ri-add-circle-line cart" style={styles} onClick={(event)=>addItems(event,img)}></i>}
    }

    useEffect(()=>{
        cartItems.some(x=>x.id===img.id) ? toggleCartAdd(true): toggleCartAdd(false)

    },[cartItems])


return(
    <div  ref={ref}className={`${classNames(i)} image-container`}>
        
        <img  src={img.url} className="image-grid"/>
        {heartIcon}
        {cartIcon()}
    </div>
)

}



Images.propTypes = {
    className: PropTypes.string,
    toggleFavorite:PropTypes.func,
    i:PropTypes.number,
    img: PropTypes.shape({
         url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Images