//requerer express
const express = require('express')

// utilizar o metodo de rotas express
const router = express.Router()

//requerer o metodo listar todos  requisao do metodo
const ListAllUser= require('../controllers/users/list_all_users')

// criar a rota url que o usuario ou outro sftware tera acesso
// rota de listar usuarios
router.get('/users', ListAllUser.listAll)


module.exports = router
