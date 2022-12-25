import React from 'react';
import LoginHtml from './screens/LoginHtml';
import LoginBootstrap from './screens/LoginBootstrap';
import {Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function App () {
  return (
    <>
    <Container style={{textAlign:'center'}}>
        <Link to='LoginHtml'>Versão HTML</Link> x <Link to='LoginBootstrap'>Versão Bootstrap</Link>
    </Container>
    <Routes>
      <Route path='LoginHtml' element={<LoginHtml />} />
      <Route path='LoginBootstrap' element={<LoginBootstrap />} />
    </Routes>
    </>
  );
}

export default App;