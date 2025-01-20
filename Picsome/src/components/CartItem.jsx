import React,{useContext} from "react"
import { ThemeContext } from "../themeContext"
import useHover from "../hooks/useHover"
import PropTypes from "prop-types"
function CartItem(props) {
    const {removeItem}=useContext(ThemeContext)
    const[hovered,cartAdd,toggleCartAdd,ref]=useHover()
    
    const deleteClass= hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
         
            <i className={deleteClass}
               ref={ref}
              onClick={(event)=>(removeItem(event,props.x.id))}
            ></i>
            <img src={props.x.url} width="130px" />
            
        </div>
    )
}

CartItem.propTypes={
    x: PropTypes.shape({
        url:PropTypes.string.isRequired,
       
    })
}

export default CartItem