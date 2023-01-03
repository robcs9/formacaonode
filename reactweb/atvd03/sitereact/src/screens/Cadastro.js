import React from "react";
import { Link } from "react-router-dom";
import {Container, Form, Button, Row, Col } from "react-bootstrap";

export default function Cadastro() {
    return (
        <Container fluid>
      <Row style={{justifyContent:'center'}}>        
        <Col md={8}>        
          <img src='https://i.imgur.com/q7Sd3S8.jpg' width={863} height={656}/>
        </Col>
        
        <Col md={3} style={{alignSelf:'center', border: 'solid', paddingBottom:50}}>
          <Row style={{justifyContent:'center', textAlign:'center'}}>
          <header style={{marginTop: 30, marginBottom: 30}}><h2>Cadastro de Usuário</h2></header>
          <Form style={{width:300}}>
          <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Nome" />
            </Form.Group>
            <Form.Group className="mb-3" controlId='formBasicEmail'>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Senha" />
            </Form.Group>
            <Link to='/Login'>
                <Button variant="primary" style={{width:275}}>
                  Cadastrar
                </Button>
            </Link>
          </Form>
          </Row>
        </Col>
      </Row>
    </Container>
    );
}