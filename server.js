const express = require('express');
const app = express();
const db = require('./config/mongoose');
const port = 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/',require('./routes'));


app.listen(port, (err) => {
    if(err) {
        console.log("Error in listening on port: "+ port );
    }
    console.log("Server is listening on port: " + port);
})