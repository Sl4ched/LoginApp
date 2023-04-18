const Login = require('../models/loginModel')
const {ObjectId} = require("mongodb");

const create_login = (req, res) => {
    Login.find()
        .then(result => res.render('login_screen',{all_data:result}))
        .catch(err => console.log(err))
}

const login_success = (req, res) => {
    res.render('login_success')
}

const delete_val = (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        Login.findByIdAndDelete(req.params.id)
            .then(() => res.status(301).json({deleted: true}))
            .catch(err => console.log(err))
    }
}

const get_val = (req, res) => {
    Login.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
}



module.exports = {
    create_login,
    login_success,
    delete_val,
    get_val
}