const express = require('express');
const router = express.Router();
const generalTools = require('../tools/general-tools');
const {
    loginPage,
    loggedInUser,
} = require("../services/Login");

router.get('/', generalTools.sessionChecker, loginPage)
router.post('/loggedInUser', loggedInUser);

module.exports = router;