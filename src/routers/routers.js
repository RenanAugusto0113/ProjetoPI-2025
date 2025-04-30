// Requerer express
const express = require('express')

// Utilizar o metodo de rotas express
const router = express.Router()

// Requerer o metodo listar todos  requisao do metodo
const ListAllUser= require('../controllers/users/list_all_users')

// Criar a rota url que o usuario ou outro sftware tera acesso
// Rota de listar usuarios
router.get('/users', ListAllUser.listAll)
// Rota de listar usuarios por id
router.get('/users/:id', ListAllUser.listAllById)
// Rota de listar usuarios por nome
router.get('/users/name/:name', ListAllUser.listAllByName)


module.exports = router
