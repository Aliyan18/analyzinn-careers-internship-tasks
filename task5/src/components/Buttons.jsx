import { useState } from "react";
import { useContext } from 'react';
import { CartContext } from "../Pages/CartContext"; 

export default function Buttons({item,handleEdit,handleDelete, editStatus={editStatus}}){
const[editing,setEditing]=useState(editStatus.setEdit);
const {addToCart,setHidden}=useContext(CartContext);
   return(
<>
        {editStatus.edit?<button type='button' 
        onClick={()=>{handleEdit(item);
          setEditing(false)
        editStatus.setEdit(false);
        }}>Submit</button>:
        <button type='button' 
        onClick={()=>{
          setEditing(true);
        {editStatus.setEdit(true)};
        }}>Edit</button>}
<button id={item.id} type='button' onClick={()=>handleDelete(item.id)}>delete</button>
<button onClick=
              {()=>{addToCart(item);
              setHidden(()=> false)}}>
                 Add to Cart 
</button>

  </>
    )
}