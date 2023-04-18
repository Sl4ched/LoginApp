const Login = require("../models/loginModel");
const get_reg_page = (req, res) => {
    res.render('register_page')
}

const post_register = (req, res) => {

    value = new Login(req.body)

    value.save()
        .then(() => res.redirect('/login'))
        .catch(err => console.log(err))

}

module.exports = {
    get_reg_page,
    post_register,
}