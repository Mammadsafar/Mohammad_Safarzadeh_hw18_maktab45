const url = require('url');
const generalTools ={};

generalTools.sessionChecker = (req, res, next) => {
    if(req.session.user && req.cookies.user_sid){
        return res.redirect('/api.user.dashboard')
    }
}

generalTools.loginChecker= (req, res, next) => {
    if(!req.session.user){
        return res.redirect(url.format({
            pathname: 'api/'
        }))
    }
}