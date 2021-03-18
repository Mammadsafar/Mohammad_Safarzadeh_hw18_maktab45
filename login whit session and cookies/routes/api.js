const express = require('express');
const router = express.Router();
const register = require('../controller/register');
const login = require('../controller/login');
const logout = require('../controller/logout');
const userData = require('../controller/userData');
const dashboard = require('../controller/dashboard');
// const userRouter = require('users');


const generalTools = require('../tools/general-tools');
/* GET users listing. */
console.log(123000000432);
router.get('/', (req, res) => {
    res.render("home")
})
router.use('/register', register);
router.use('/login', login);

router.use('/dashboard', generalTools.loginChecker, dashboard);

router.use('/logout', logout);

router.use('/userData', userData);

module.exports = router;