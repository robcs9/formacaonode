//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function LoginBootstrap() {
  return (
    <Container fluid>
      <Row style={{justifyContent:'center'}}>        
        <Col md={8}>        
          <img src='https://i.imgur.com/q7Sd3S8.jpg' width={863} height={656}/>
        </Col>
        
        <Col md={3} style={{alignSelf:'center', border: 'solid', paddingBottom:50}}>
          <Row style={{justifyContent:'center', textAlign:'center'}}>
          <header style={{marginTop: 30, marginBottom: 30}}><h2>Login</h2></header>
          <Form style={{width:300}}>
            <Form.Group className="mb-3" controlId='formBasicEmail'>
              
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <Button variant="primary" type="submit" style={{width:275}}>
              Acessar
            </Button>
          </Form>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
