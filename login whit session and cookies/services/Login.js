const path = require('path');
const User = require(path.join(__dirname, '../models/Users'));
const url = require('url');
const bcrypt = require('bcrypt');

const loginPage = (req, res) => {
    res.render('auth/login')
}


const loggedInUser = (req, res) => {

    if (!req.body.username || !req.body.Password) {
        return res.status(400).json({
            msg: "Empty Field :("
        });
    }


    User.findOne({
        userName: req.body.username
    }, (err, user) => {
        if (err) return res.status(400).json({
            msg: "server error :("
        });
        if (!user) return res.status(404).json({
            msg: "Not Found :("
        })


        bcrypt.compare(req.body.Password, user.Password, function (err, isMatch) {

            if (err) {
                return res.redirect(url.format({
                    pathname: "/api/login",
                    query: {
                        "msg": 'Server Error :('
                    }
                }));
            };

            if (!isMatch) return res.redirect(url.format({
                pathname: "/api/login",
                query: {
                    "msg": 'User Not Found :('
                }
            }));

            req.session.user = user._id;
            res.send();

        });

    })
}



module.exports = {
    loggedInUser,
    loginPage,
}