import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Header from './components/Header'
import Snp from './Pages/Snp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  const [count, setCount] = useState(0)
  return (<>
    <BrowserRouter>  
<Routes>

  <Route path='/' element={<Login/>}></Route>
  <Route path='/Signup' element={<Snp/>}></Route>

    <Route path='/Home' element={ <><Header/><Landing/></>}/>
   
   </Routes>
   </BrowserRouter>
   </>  )
}

