const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

var test;

app.get('/jader', (req, res) => {
    test = {
        "nome": "Jader Sabino Borges"
    };
    res.send(test);
});


app.listen(3000);