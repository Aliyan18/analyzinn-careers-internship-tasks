import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Header from './components/Header'
import Snp from './Pages/Snp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AuthProvider} from './Pages/Context' 
import { CartProvider } from './Pages/CartContext.jsx';

export default function App() {
  return (<><CartProvider>
  <AuthProvider>
    <BrowserRouter>  
<Routes>

  <Route path='/' element={<Login/>}></Route>
  <Route path='/Signup' element={<Snp/>}></Route>

    <Route path='/Home' element={ <><Header/><Landing/></>}/>
  

   </Routes>
   </BrowserRouter>
   </AuthProvider></CartProvider>
   </>  )
}

