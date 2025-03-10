import { auto } from "@popperjs/core"
import { useContext } from "react"
import { CartContext } from "../Pages/CartContext"
export default function CartItem({item}){
   const itemStyle={
        color:'black',
        backgroundColor:'rgb(231, 189, 83)',
        display:'flex',
        border:'black',
        margin:'1px',
        justifyContent:'space-between'

    }
    const {increaseQuantity,decreaseQuantity}=useContext(CartContext)
    return(<>
    <div className="cartItem" style={itemStyle}>
        <div className="itemName" style={{display:'flex',textAlign:'center',margin:'auto'}}>{item.name}</div>
        <div style={{margin :'auto'}}>{item.quantity?item.quantity:(item.quantity=1)}</div>
        <div className="btns" style={{margin:'auto'}}>
            <button style={{backgroundColor:'orange', margin:'auto'}} onClick={()=>increaseQuantity(item)}>+</button>
            <button style={{backgroundColor:'red', margin:'auto'}} onClick={()=>decreaseQuantity(item)}>-</button>
        </div>
    </div>
    </>)
}