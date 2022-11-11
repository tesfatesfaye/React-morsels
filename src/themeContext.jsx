import React,{useState,useEffect} from "react";


const ThemeContext=React.createContext()
function ThemeContextProvider({children}){
 
    const[allPhotos,setAllPhotos]=useState(()=>[])
    const[cartItems,setCartItems]=useState(()=>[])
    const[totalValue,setTotalValue]=useState(()=>"")
    const[orderStatus,setOrderStatus]=useState(()=>"Place order")
    const addItems=(event,x)=>{
        event.stopPropagation()
        setCartItems(prev=> [...prev,x])
    }

    const toggleOrder=()=>{
        setOrderStatus("Ordering...")
        setTimeout(()=>{
            console.log("Order placed!")
            setCartItems([])
            setOrderStatus("Place order")
        },3000)
       
    }

    const removeItem=(event,id)=>{
        event.stopPropagation()
        setCartItems(prev=>{
            return prev.filter(x=>x.id!==id)
        })
    }
    const toggleFavorite=((event,id)=>{
        event.stopPropagation()
        setAllPhotos(prev=>{
           return prev.map(x=>{
            return x.id===id ? {...x, isFavorite: !x.isFavorite} : {...x}})
           }) 
        })
      

       

    
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json")
        .then(res=> res.json())
        .then(data=>setAllPhotos(data))


    },[])


    return(
        <ThemeContext.Provider value={{allPhotos, toggleFavorite,addItems,cartItems,removeItem,totalValue,setTotalValue,orderStatus,setCartItems,setOrderStatus,toggleOrder}}>
            {children}
        </ThemeContext.Provider>

    )

}
export{ThemeContextProvider, ThemeContext}