const ModelUser = require(`../models`).User

class LoginController {

    static show (req, res) {
        res.send(`ini login page`)
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
                    username:user.username,
                    role:user.role
                }
                next()
            } else {
                res.send(`invalid password`)
            }
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = LoginController