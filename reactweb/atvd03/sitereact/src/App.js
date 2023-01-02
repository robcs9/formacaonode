//import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { BrowserRouter, Form, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro'
import { NavLink } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
//useeffect and usestate?

function App() {
  return (
    <>
    <BrowserRouter>
      <Link to='Login'>Logar </Link>
      
      <Routes>
        <Route path='Login' element={<Login />} />
        <Route path='Home' element={<Home />} />
        <Route path='Cadastro' element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
