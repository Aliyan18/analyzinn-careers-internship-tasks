import '../components/styleSheets/landing.css'
import { useState } from 'react'
import {v4 as uuid} from 'uuid';
import Card from '../components/Card.jsx'

 import ShoppingCart from '../components/ShoppingCart/ShoppingCart.jsx';
export default function Landing(){


 const [pets,setPets]=useState([]);
 const [currentPet, setCurrentPet] = useState({ id: null, name: '', price: '', type: '', breed: '' });
    const [isEditing, setIsEditing] = useState(false);

async function handleSubmit(e){
    e.preventDefault();
let name,price,breed,type;
console.log("handleSubmit"+isEditing);
document.querySelector('form').classList.remove('movve');
name = document.querySelector('#name').value;
breed = document.querySelector('#breed').value;
type = document.querySelector('#type').value;
price = document.querySelector('#price').value;
let id=uuid();

let newPet = { id,name, breed, type, price };

    if(!isEditing){
    
    console.log(document.querySelector('#breed').value);
    console.log(document.querySelector('#type').value);
    console.log(document.querySelector('#price').value);
//-->

    //let newPet = { id,name, breed, type, price };
    setPets([...pets,newPet]);

    }
    else{
    //setPets(...pets,{name: document.querySelector('#name').textContent, breed:document.querySelector('#breed').textContent});
console.log("reached")
    // Update pets state
    console.log(currentPet);
    let id=currentPet.id;
     newPet = { id,name, breed, type, price };

    setPets(pets.map(item => item.id !== currentPet.id ? item : currentPet));

      console.log(pets);
      setIsEditing(false);
    // Clear form inputs
 //console.log(document.querySelector('#name').value);
    }
    try {
      const response = await fetch('http://localhost:3000/pets/add', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(newPet) // Send pet data in the body as JSON
      });

      if (response.ok) {
          const result = await response.json();
          alert('Pet added successfully: ' + JSON.stringify(result.pet));
      } else {
          alert('Error adding pet');
      }
  } catch (error) {
      console.error('Error:', error);
  }
    document.querySelector('#name').value = '';
document.querySelector('#breed').value = '';
document.querySelector('#type').value = '';
document.querySelector('#price').value = '';
}

async function handleEdit(pet) {
  try {
    // Assuming setCurrentPet sets the pet you are editing
    setCurrentPet(pet);

    // Using the pet directly instead of currentPet
    const id = pet.id;
    const newPet = {  name: pet.name, breed: pet.breed, type: pet.type, price: pet.price };
console.log(newPet);
    // Async function to handle PUT request using fetch
    const response = await fetch(`http://localhost:3000/pets/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPet),
    });

    // Check for a successful response
    if (response.ok) {
      const result = await response.json();
      console.log('Pet edited successfully:', result);

      // Update the pet list with the edited pet
      setPets(pets.map(item => item.id !== pet.id ? item : newPet));
    } else {
      // Handle any errors that might occur during fetch
      console.log('Failed to edit pet:', response.statusText);
    }

    console.log('Editing pet:', pet);
  } catch (e) {
    console.log('Error:', e);
  }
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
<><div style={{width:'70%'}}>
<div className="pets">
   { pets.length===0? 'Press button to add Pets: ':( pets.map((item,inx)=>{return(
 
    <Card key={item.id} inx={inx} pets={pets} setPets={setPets} item={item} handleDelete={() => handleDelete(item.id)
    } handleEdit={handleEdit}/> )
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
<button style={{margin:'auto', width:'40%'}}>Submit</button>

<button style={{width:'40%',margin:'auto'}} type="button" onClick={handleBack}>Back</button>

</form></div>

<ShoppingCart></ShoppingCart>
</>
)
}
 //export default  Landing;
// handleEdit={()=>handleEdit(item.id)
