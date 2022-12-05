// Requiring module
const express = require('express');

// Creating express object
const app = express();

// Handling GET request
app.get('/', (req, res) => {
    res.send("My first Node App is running on this server! <br><br><a href='/recomm'>Silly Recommendation</a>")
    res.end()
});
app.get('/recomm', (req, res) => {
    res.send("Maybe, check out my barebone <a href='https://robcs9.github.io'>blog</a> in the meantime? Yes, it\'s got a long way to go before becoming a proper blog and I have not really updated it at all, but we all got to start somewhere, right? <br><br><em>One step at a time.</em>")
    res.end()
});
// Port Number
const PORT = process.env.PORT || 5000;

// Server Setup
app.listen(PORT,console.log(`Server started on port ${PORT}`));
