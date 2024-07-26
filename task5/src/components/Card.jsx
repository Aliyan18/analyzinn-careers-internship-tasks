import '../components/styleSheets/landing.css'
import {v4 as uuid} from 'uuid';
import { useState } from 'react'
import Buttons from './Buttons';

export default function Card({inx,item,handleDelete,handleEdit}){

const classes=[
  "card text-white bg-success mb-3" ,
  "card text-white bg-secondary mb-3" ,
  "card text-white bg-primary mb-3" ,"card text-white bg-danger mb-3",
  "card text-white bg-warning mb-3","card text-white bg-info mb-3"
]

return(
<>


<div className={classes[inx%6]} style={{maxWidth: '18rem',margin:'5px'}}>
  <div className="card-header">{item.type}</div>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text"><ul >
    <li key={uuid()} >breed:{item.breed}</li>
    <li key={uuid()} >price:{item.price}</li>
</ul></p>
<Buttons item={item} handleDelete={handleDelete} handleEdit={handleEdit}></Buttons>
  </div>
</div>



</>)}


// export default Card;