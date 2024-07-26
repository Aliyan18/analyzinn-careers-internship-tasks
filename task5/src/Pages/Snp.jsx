import React from 'react';
import '../components/styleSheets/signup.css'
 // Your custom CSS
import {useNavigate} from 'react-router-dom'
import Form from '../components/Form';
export default function Snp() {
  const navigate=useNavigate();

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
  navigate('/');
}

  return (<>   <div className="outer">
  <h3>Signup</h3>
  <Form handleSubmit={handleSubmit} text={'Login'} handleBtn={()=>useNavigate('/')}></Form>
    <button type="button" onClick={handleLogin} className="btn btn-secondary">Login</button>

  </div>
 </>)
}

// export default Login;
