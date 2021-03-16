const express = require('express');
const router = express.Router();
const register = require('../controller/register');

/* GET users listing. */
console.log(123000000432);
router.use('/register', register);

router.use('/user', generalTools.loginChecker, userRouter);

module.exports = router;
