import React,{useContext,useEffect} from "react"
import { ThemeContext } from "../themeContext"
import CartItem from"../components/CartItem"
function Cart() {
    const {cartItems,totalValue,setTotalValue,orderStatus,toggleOrder}=useContext(ThemeContext);
    const cartItemsElements=cartItems.map(x=>{
      return  <CartItem key={x.id} x={x}/>
    })
    

    useEffect(()=>{

      setTotalValue((cartItems.length*5.99).toLocaleString("en-US", {style: "currency", currency: "USD"}) )  

    },[cartItemsElements])

   
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsElements}
            <p className="total-cost">Total:{totalValue} </p>
            <div className="order-button">
            {cartItems.length >0 ? <button onClick={toggleOrder}>{orderStatus}</button> : ""}
            </div>
        </main>
    )
}

export default Cart