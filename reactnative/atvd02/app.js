// Requiring module
const express = require('express');
const mysql = require('mysql2');
const connect = require('./conexao.js');

// Creating express object
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Handling GET request
app.get('/', (req, res) => {
    res.send("The API is running on this server <br><br><a href='/recomm'>Silly Recommendation</a>")
    res.end()
})

app.get('/recomm', (req, res) => {
    res.send("Maybe, check out my bare-bone <a href='https://robcs9.github.io'>blog</a> in the meantime? Yes, it\'s got a long way" +
    "to go before becoming a proper blog and I have not really updated it at all, but we all got to start somewhere, right? <br><br><em>One step at a time.</em>")
    res.end()
})

app.get('/clientes', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from clientes', res);
})

app.get('/clientes/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from clientes where id=' + req.params.id, res);
})

app.put('/clientes/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update clientes set nome='"+req.body.nome+"' where id="+req.params.id, res);
})
app.post('/clientes/', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into clientes (nome) value('"+req.body.nome+"')", res);
})

app.delete('/clientes/:id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from clientes where id="+req.params.id, res);
})
// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT,console.log(`Server started on port ${PORT}`));
