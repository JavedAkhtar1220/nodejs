const userModel = require("../models/authSchema");
const bscript = require('bcryptjs');

const signupController = (req, res) => {

    const { username, email, password } = req.body;
    userModel.findOne({ email: email }, async (err, data) => {
        if (err) {
            res.send(err);
        }
        else if (data) {
            res.send('Email Address already exist');
        }
        else {

            const hassPass = await bscript.hash(password, 10);

            const obj = {
                username: username,
                email: email,
                password: hassPass
            }

            userModel.create(obj, (error, _) => {
                if (err) {
                    res.send(error);

                }
                else {
                    res.send("Signup Successfully");

                }
            })
        }
    })
}

const loginController = (req, res) => {

    const { email, password } = req.body;

    userModel.findOne({ email: email }, async (err, user) => {

        if (err) {

            res.send(err);

        }
        else if (user) {
            await bscript.compare(password, user.password)
                .then(password => {
                    if (password) {
                        res.send(user);
                    }
                    else {
                        res.send("Not found");
                    }
                })
                .catch(err => {
                    res.send(err);
                })

        }
        else {
            res.send("Not found");
        }

    })
}

module.exports = { signupController, loginController }