 require('dotenv').config()
//importar o objeto api
const api = require('./src/api');

//definir porta do projeto
//const porta = 4040

// inicializar o servidor 
api.listen(process.env.PORT);()=>{ console.log('\n API INICIALIZADA  !!!!')};