const ModelUser = require(`../models`).User

class LoginController {

    static show (req, res) {
        res.render(`login`, {session: req.session.user})
    }

    static doLogin (req, res) {
        let user = {
            username: req.body.username,
            password: req.body.password
        }
        ModelUser.findAll({where:user})
        .then(data => {
            if (data.length > 0) {
                req.session.user = {
                    username:data[0].username,
                    role:data[0].role,
                    name:data[0].first_name
                }
                res.redirect(`/foods`)
            } else {
                res.send(`invalid username / password`)
            }
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = LoginController