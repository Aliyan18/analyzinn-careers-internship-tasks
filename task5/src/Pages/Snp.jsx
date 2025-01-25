import React from 'react';
import { useState } from 'react';
import '../components/styleSheets/signup.css'
 // Your custom CSS
 import storeIcon from '../images/storeIcon.png'
import { useNavigate} from 'react-router-dom'
import Form from '../components/Form';

export default function Snp() {

  const navigate=useNavigate();
const [isMoved,setMoved]=useState(false);


  function handleSubmit(user,pass){
    fetch('/api/snp', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: user,
          password: pass
      })
  })
  .then(response => response.text())
  .then((data) => {console.log(data);
   navigate('/');
})
  .catch(error => console.error('Error:', error));


//console.log(localStorage.getItem('jwt_token'))

  }
function handleLogin(){
  setTimeout(()=>{
    setMoved(()=>true)

  },50)
  setTimeout(() => {
    navigate('/');

  },500);
}

  return (<>   <div className="outer-bndry">
    <div className={`storeimg storeimg-right ${isMoved ? "move-left" : ""}`}><img src={storeIcon} alt="logo"></img></div>
    <div  className={` form-class ${isMoved ? "move-right" : ""}`}>
  <div className="form">
  <h3>Signup</h3>
  <Form  handleSubmit={handleSubmit} text={'Login'} handleBtn={()=>navigate('/')}></Form>
    <button type="button" onClick={handleLogin} className="btn btn-secondary btn1">Login</button>
    </div>
  </div></div>
 </>)
}

// export default Login;
