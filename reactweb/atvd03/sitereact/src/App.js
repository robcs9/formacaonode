import './App.css';
import * as React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './screens/Login';
import Home from './screens/Home';
import Cadastro from './screens/Cadastro'
import { Container, Navbar} from 'react-bootstrap';

function App() {
  return (
    <>
    <BrowserRouter>
          <Navbar bg="dark" variant="dark">
        <Container style={{justifyContent:'center'}}>
          <Navbar.Brand href="/Login">
            <img
              alt=""
              src="https://securitystbk.com/wp-content/uploads/2018/11/Padlock-PNG-Transparent-Image.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Secret Manager
          </Navbar.Brand>
        </Container>
      </Navbar>
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
