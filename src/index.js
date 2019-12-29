const express = require ('express');                    
const config = require ('./server/config.js');

//Database
require('./database');

//Iniciando el Server
const app =  config(express());

app.listen(app.get('port'), ()=>{

    console.log('SERVER ON PORT', app.get('port'));

});