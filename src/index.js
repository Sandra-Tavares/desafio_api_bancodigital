const express = require('express');
const rotas = require('./rotas');
const app = express();


app.use(express.json());
// app.use(validarSenha);
app.use(rotas);


app.listen(3000);