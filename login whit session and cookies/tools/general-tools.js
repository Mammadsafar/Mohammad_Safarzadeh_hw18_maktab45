const url = require('url');
const generalTools = {};

generalTools.sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        return res.redirect('/api/dashboard')
    }
    return next();
}

generalTools.loginChecker = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/api/login')
    };

    return next();
};


module.exports = generalTools;