import '../components/styleSheets/landing.css'
import { useState } from 'react'
import {v4 as uuid} from 'uuid';
import Card from '../components/Card.jsx'

 export default function Landing(){
 const [pets,setPets]=useState([]);
 const [currentPet, setCurrentPet] = useState({ id: null, name: '', price: '', type: '', breed: '' });
    const [isEditing, setIsEditing] = useState(false);

function handleSubmit(e){
    e.preventDefault();
let name,price,breed,type;
console.log("handleSubmit"+isEditing);
document.querySelector('form').classList.remove('movve');
name = document.querySelector('#name').value;
breed = document.querySelector('#breed').value;
type = document.querySelector('#type').value;
price = document.querySelector('#price').value;
    if(!isEditing){
    
    console.log(document.querySelector('#breed').value);
    console.log(document.querySelector('#type').value);
    console.log(document.querySelector('#price').value);
 let id=uuid();
 const newPet = { id,name, breed, type, price };
setPets([...pets,newPet]);

    }
    else{
    //setPets(...pets,{name: document.querySelector('#name').textContent, breed:document.querySelector('#breed').textContent});
console.log("reached")
    // Update pets state
    console.log(currentPet);
    let id=currentPet.id;
    const newPet = { id,name, breed, type, price };

    setPets(pets.map(item => item.id !== currentPet.id ? item : newPet));

      console.log(pets);
      setIsEditing(false);
    // Clear form inputs
 //console.log(document.querySelector('#name').value);
    }
    document.querySelector('#name').value = '';
document.querySelector('#breed').value = '';
document.querySelector('#type').value = '';
document.querySelector('#price').value = '';
}

function handleEdit(pet){
  document.querySelector('form').classList.add('movve');

   document.querySelector('#name').value=pet.name;
      document.querySelector('#breed').value=pet.breed;
      document.querySelector('#type').value=pet.type;
      document.querySelector('#price').value=pet.price;
  setCurrentPet(pet);
  setIsEditing(true);
  console.log(isEditing);

}
function handleClick(e){
    e.preventDefault();

document.querySelector('form').classList.add('movve');
}

function handleDelete(id){
  //e.preventDefault()
console.log(id);
let arr=pets.filter(item=>item.id!==id);
  setPets(arr);
}
function handleBack(){
  document.querySelector('form').classList.remove('movve');
  document.querySelector('#name').value = '';
  document.querySelector('#breed').value = '';
  document.querySelector('#type').value = '';
  document.querySelector('#price').value = '';
}
return(
<>
<div className="pets">
   { pets.length===0? 'Press button to add Pets: ':( pets.map((item,inx)=>{return(
 
    <Card key={item.id} inx={inx} item={item} handleDelete={() => handleDelete(item.id)
    }handleEdit={handleEdit}/>)
     }))}
</div>
<button id="addPet" type='button' onClick={handleClick}>Add Pet</button>
<form onSubmit={handleSubmit}>
<div className="mb-3">
  <label htmlFor="basic-url" className="form-label"></label>
  <div className="input-group">
    <span className="input-group-text" id="basic-addon3">name</span>
    <input type="text" className="form-control" id="name" aria-describedby="basic-addon3 basic-addon4" required/>
  </div>
  <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
</div>   <br /> <select className="form-select" aria-label="Default select example" id="type" required>
  <option >Select type</option>
  <option value="Fish">fish</option>
  <option value="Mammal">mammal</option>
  <option value="Bird">bird</option>
</select><br />
<div className="mb-3">
  <label htmlFor="basic-url" className="form-label"></label>
  <div className="input-group">
    <span className="input-group-text" id="basic-addon3">breed</span>
    <input type="text" className="form-control" id="breed" aria-describedby="basic-addon3 basic-addon4" required/>
  </div>
  <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
</div>
  

    <div className="mb-3">
  <label htmlFor="basic-url" className="form-label"></label>
  <div className="input-group">
    <span className="input-group-text" id="basic-addon3">price</span>
    <input type="text" className="form-control" id="price" aria-describedby="basic-addon3 basic-addon4" required/>
  </div>
  <div className="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
</div>
<button type="button" onClick={handleBack}>Back</button>

<button>Submit</button>
</form>


</>
)
}
 //export default  Landing;
// handleEdit={()=>handleEdit(item.id)
