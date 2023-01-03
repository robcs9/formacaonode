import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Row style={{justifyContent:'center', margin:100}}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.imgur.com/Qh6IEvk.png" />
              <Card.Body style={{textAlign:"center"}}>
                <Card.Title>Logado com sucesso!</Card.Title>
                <Card.Text>
                    <p>Bem vindo, User!<br/>
                    Faça bom uso do nosso querido App!</p>
                </Card.Text>
              </Card.Body>
            </Card>
        </Row>
    );
}