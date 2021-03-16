const path = require('path');
const User = require(path.join(__dirname, '../models/Users'));
const url = require('url');
const bcrypt = require('bcrypt');
const fieldPattern = [
    "firstName",
    "lastName",
    "userName",
    "Password",
    "birthDay",
    "Gender",
    "email",
    "phoneNumber"
];

const registerPage = (req, res) => {
    res.render('auth/register')
}
const getAllUser = (req, res) => {
    console.log(1234);
    User.find({}, (err, user) => {
        if (err) {
            return res.redirect(url.format({
                pathname: "/api/auth/registerPage",
                status: 500,
                query: {
                    "msg": "Server Error :("
                }
            }))
        }
        if (!user) {
            return res.redirect(url.format({
                pathname: "/api/auth/registerPage",
                status: 400,
                query: {
                    "msg": 'Username Already Exist :('
                }
            }));
        };


        res.json(user)


    })
}
const addUser = (req, res) => {

    if (!req.body.userName || !req.body.Password) {
        return res.status(400).json({
            msg: "Empty Field :(",
            err: err.msg
        });
    }

    User.find({
        userName: req.body.userName.trim()
    }, (err, user) => {
        if (err) {
            return res.status(500).json({
                msg: "Server Error :(",
                err: err.msg
            });
        }
        // if (user.length > 0) {
        //     console.log(user);
        //     return res.status(400).json({
        //         msg: "Username Already Exist :("
        //     });
        // };

        const bodyKeys = Object.keys(req.body);
        const checkFieldsResult = fieldPattern.every((field) =>
            bodyKeys.includes(field)
        );

        if (!checkFieldsResult || bodyKeys.length !== 8) {
            return res.status(400).json({
                msg: "Bad Request :)",
                err: err.msg
            });
        }

        console.log(req.body.Password);
        const newUser = new User(req.body)
        console.log(req.body.Password);
        const myPlaintextPassword = req.body.Password;
        bcrypt.genSalt(10, function (err, salt) {
            console.log("salt   => ", salt);
            bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
                // req.body.Password = hash;
                console.log("hash   => ", hash);

                newUser.Password = hash;
                console.log(newUser);
                newUser.save(err => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({
                            msg: "Server Error :(",
                            err: err.msg
                        });
                    };
                    // return res.redirect("/api/login/loginPage");
                })
            });
        });



    })


}


const loggedInUser = (req, res) => {
    if (!req.body.userName || !req.body.Password) {
        return res.status(400).json({
            msg: "Empty Field :(",
            err: err.msg
        });
    }

    User.findOne({username: req.body.username}, (err, user) => {
        if (err) return res.status(400).json({msg: "server error :("});
        if (!user) return res.status(404).json({msg:"Not Found :("})
        console.log(req.body.Password);
        console.log(user.Password);

        // console.log(bcrypt.compareSync(req.body.Password, user.Password));
        

        bcrypt.compare(req.body.Password, user.Password, function(err, result) {
            console.log(" err   =>" , err);
            console.log(" result   =>" , result);
            res.redirect('/api/user/dashboard')
        });

    })
}



module.exports = {
    registerPage,
    addUser,
    getAllUser,
    loggedInUser,
}