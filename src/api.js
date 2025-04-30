
// Requerer express
const express = require('express');

// Atribuir a uma constante o objeto express
const api = express();

// Requerer as rotas
const routers = require('./routers/routers')

// Informar que API podera utilizar urls
api.use(express.urlencoded({extended:false}))

// Informar que API ira utilizar o json
api.use(express.json())

// Utilizar ou acessar as rotas
api.use('/',routers)


module.exports = api;