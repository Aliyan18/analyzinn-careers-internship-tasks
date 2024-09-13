import { useState } from "react";

export default function Buttons({item,handleEdit,handleDelete, editStatus={editStatus}}){
const[editing,setEditing]=useState(editStatus.setEdit);
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
  
  </>
    )
}