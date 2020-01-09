const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Iniciando o app
const app = express();
//permite que seja enviado json para a aplicação
app.use(express.json());
//Permitindo acesso de outros softwares, usuarios à nossa api
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

//Consegue pegar todos os models dentro desta pasta
requireDir('./src/models');

const Product = mongoose.model('Product');

//Rotas
app.use('/api', require('./src/routes'));
app.listen(3001);