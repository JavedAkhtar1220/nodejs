const userModel = require("../models/authSchema");

const getUser = (req, res) => {
    const { _id } = req.body;
    userModel.find({ _id: _id }, (err, data) => {
        if (err) {
            res.send(err);
        }
        else if (data) {
            res.send(data);
        }
        else {
            res.send("Not Found");
        }
    })
}

module.exports = { getUser };