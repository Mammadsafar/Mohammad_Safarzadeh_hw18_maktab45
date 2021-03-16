const express = require('express');
const routes = express.Router();

const {
    registerPage,
    addUser,
    getAllUser,
    loggedInUser,
} = require("../services/Register");

console.log(123432);
routes.get('/registerPage', registerPage);
routes.post('/', addUser);
routes.get('/getAllUser', getAllUser);
routes.post('/loggedInUser',loggedInUser);

module.exports = routes;