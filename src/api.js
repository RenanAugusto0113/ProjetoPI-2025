
// requerer express
const express = require('express');

// atribuir a uma constante o objeto express
const api = express();

//requerer as rotas
const routers = require('./routers/routers')

//informar que API podera utilizar urls
api.use(express.urlencoded({extended:false}))

//informar que API ira utilizar o json
api.use(express.json())

// utilizar ou acessar as rotas
api.use('/',routers)


module.exports = api;