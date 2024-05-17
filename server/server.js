require('dotenv').config()

const express = require('express')
const app = express()
const swaggerSetup = require('./swagger');

const autenticacaoApi = require('./routes/autenticacaoapi');
app.use ('/api/', autenticacaoApi);

const usuarioApi = require('./routes/usuarioapi');
app.use ('/api/usuario', usuarioApi);

// Configuração do Swagger
swaggerSetup(app);

app.use ((req, res) => {    
    res.status(404);
    res.send('Recurso solicitado não existe');
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});