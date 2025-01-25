import React, { useState } from 'react';
import '../components/styleSheets/signup.css'
import {jwtDecode} from 'jwt-decode'
import storeIcon from'../images/storeIcon.png'
 // Your custom CSS
import {useNavigate} from 'react-router-dom'
import Form from '../components/Form';
import { useContext } from 'react';
import { AuthContext } from './Context';

export default function Login() {
  const navigate=useNavigate();
  const auth =useContext(AuthContext);

  function handleSubmit(){
    fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: document.querySelector('#exampleInputEmail1').value,
          password: document.querySelector('#exampleInputPassword1').value
      })
  })
  .then(response => response.json())
  .then((data) =>  {
                    localStorage.setItem('jwt_token',data.token)
                    auth.setUser( jwtDecode(data.token).username)
                    console.log(jwtDecode(data.token).role)
                    navigate('/Home');

                    })
  .catch(error => console.error('Error:', error));

//setTimeout(()=>{console.log("user: ",auth.user)},2000)//user gives"
//console.log(jwtDecode(localStorage.getItem('jwt_token')).username);
//correct username given
  }
  const [isMoved,setMoved]=useState(false);
function handleSignup(){
 //console.log('here');
 setTimeout(()=>{
  setMoved(()=>true)

},50)
 setTimeout(()=>{
  navigate('/Signup')
 },500)
 
}
  return (<>   <div className="outer-bndry">
    <div className={` form-class ${isMoved ? "move-left" : ""}`}>
<div className="form">
  <h3>Login</h3>
 <Form handleSubmit={handleSubmit} text={'LOGIN'} handleBtn={ ()=>{navigate('/Signup')}}></Form>
 <button type="button" onClick={handleSignup} className="btn btn-secondary">Signup</button>
 </div></div>
 <div className={`storeimg ${isMoved ? "move-right" : ""}`}><img src={storeIcon} alt="logo"></img></div>

 </div>
 </>)
}

// export default Login;
