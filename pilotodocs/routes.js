const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController');


// Rotas da home
route.get('/', homeController.index);

// Rotas para o registro
route.get('/register/index',registerController.index);

// Rotas para o Login
route.get('/login/index', loginController.index);
route.post('/login/login', loginController.login);

module.exports = route;
