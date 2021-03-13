const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/api_Assignment', {useNewUrlParser:true,useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console , 'Connection error: '));

db.once('open',()=>{
    console.log("Connected with mongodb");
});

module.exports = db;
