require('dotenv').config()

const express = require('express')
const app = express()

const autenticacaoApi = require('./routes/autenticacaoapi');
app.use ('/api/', autenticacaoApi);

const usuarioApi = require('./routes/usuarioapi');
app.use ('/api/usuario', usuarioApi);

app.use ((req, res) => {    
    res.status(404);
    res.send('Recurso solicitado não existe');
})

app.listen(5000, () => { console.log(`Servidor rodando em 5000`)})