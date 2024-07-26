import React from 'react';
import '../components/styleSheets/signup.css'
 // Your custom CSS
import {useNavigate} from 'react-router-dom'
import Form from '../components/Form';

export default function Login() {
  const navigate=useNavigate();

  function handleSubmit(){
    fetch('/api/auth', {
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
  .then((data) =>  {localStorage.setItem('jwt_token',data.token)
   navigate('/Home');
})
  .catch(error => console.error('Error:', error));


//console.log(localStorage.getItem('jwt_token'))

  }
function handleSignup(){
 //console.log('here');
 navigate('/Signup')
}
  return (<>   <div className="outer">
  <h3>Login</h3>
 <Form handleSubmit={handleSubmit} text={'Signup'} handleBtn={ ()=>{navigate('/Signup')}}></Form>
 <button type="button" onClick={handleSignup} className="btn btn-secondary">Signup</button>

 </div>
 </>)
}

// export default Login;
