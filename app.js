const express = require( 'express');
const path = require( 'path');
const bodyParser = require( 'body-parser');
const app = express();

const bcrypt = require ('bcript');
const mongoose = require ('mongoose')

app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}  ));

app.use(express.static(path.join(_dirname, 'public')));

//base de datos
const mongo_uri = 'mongodb+srv://fbenjumeau:<db_password>@cluster0.mg59i.mongodb.net'

app. get('/', (req, res) => {

});

app.listen(3000, () =>{
console.log('Server Started');

})

   
module.exports = app;