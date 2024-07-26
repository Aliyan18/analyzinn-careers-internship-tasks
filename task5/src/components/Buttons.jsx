
export default function Buttons({item,handleEdit,handleDelete}){


    return(
<>
        <button type='button' onClick={()=>handleEdit(item)}>edit</button>
<button id={item.id} type='button' onClick={()=>handleDelete(item.id)}>delete</button>
  
  </>
    )
}