import '../components/styleSheets/landing.css'
import {v4 as uuid} from 'uuid';
import { useState } from 'react'
import Buttons from './Buttons';

function Card({inx,item,handleDelete,handleEdit,setPets}){

const classes=[
  "card text-white bg-success mb-3" ,
  "card text-white bg-secondary mb-3" ,
  "card text-white bg-primary mb-3" ,"card text-white bg-danger mb-3",
  "card text-white bg-warning mb-3","card text-white bg-info mb-3"
]

const [header,setHeader]=useState(item.type);
const [breed,setBreed]=useState(item.breed);
const [price,setPrice]=useState(item.price);
const [name,setName] =useState(item.name);
const [edit,setEdit]=useState(false);
const obj={id:item.id,name:name,type:header,price:price,breed:breed};
function handleSubmit(e){
e.preventDefault();

//setPets();
}
const styles={
  width:'70%',
  backgroundColor:'black',
  color:'white',
  opacity:0.5
}
return(
<>


<div className={classes[inx%6]} style={{maxWidth: '18rem',margin:'5px'}}>
  <div className="card-header">
    {edit?<input style={styles} type="text" value={header} 
    onChange={(e)=>{setHeader(e.target.value);

}}/>:header}</div>
  <div className="card-body">
   <h5 className="card-title">
    {!edit?name: <input type="text" style={styles} value={name} 
   onChange={(e)=>{setName(e.target.value);
}}/>}
</h5>
  

   <p className="card-text"><ul style={{margin:0,padding:0}}>
  
    <li key={uuid()} >{edit?<input style={styles} type="text" value={breed} 
    onChange={(e)=>{setBreed(e.target.value);

}}/>:breed}</li>
    
<li key={uuid()} >price:{!edit?price:<input style={styles} type="text" value={price} 
onChange={(e)=>{setPrice(e.target.value);
}}/>}
</li>
</ul></p>
<Buttons item={obj} handleDelete={handleDelete} handleEdit={handleEdit} editStatus={{edit,setEdit}} ></Buttons>
  </div>
</div>



</>)}


export default Card;