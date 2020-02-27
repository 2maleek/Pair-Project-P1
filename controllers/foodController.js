const ModelFood = require(`../models`).Food
const ModelTransaction = require(`../models`).Transaction
const ModelUser = require(`../models`).User

class FoodController {

    static show (req, res) {
        let session = req.session.user
        ModelFood.findAll()
        .then(food => {
            res.render('foods', { food, session:req.session.user })
        })
        .catch(err => {
            res.send(err)
        })
    }

    static add (req, res) {
        let userId = req.params.id
        let minus = req.body.quantity
        let foodId = req.body.id
        let kurang = null
        let idKurang = null
        let transaction = []

        for (let i = 0; i<minus.length; i++) {
            if (minus[i] != 0) {
                transaction.push({user_id:userId, food_id:foodId[i], quantity: minus[i]})
            }
        }
        // res.send(transaction)
        minus.forEach((i,index)=> {
            if (i != 0){
                kurang = i
                idKurang = foodId[index]
            }
        })
        ModelFood.findByPk(idKurang)
        .then(data => {
            let stockUpdate = Number(data.stock - kurang)
            let obj = {
                stock:stockUpdate
            }
            return ModelFood.update(obj, {where:{id:idKurang}})
        })
        .then(data => {
            return ModelTransaction.bulkCreate(transaction)
        })
        .then(data => {
            // console.log(`masuk`)
            res.redirect(`/foods/cart/${userId}`)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static showCart (req, res) {
        let userId = req.params.id
        // res.send(`masuk show cart`)
        let session = req.session.user
        ModelUser.findOne({where:{id:userId}, include: ModelFood})
        .then(data => {
            res.render('cart', { data, session:req.session.user })
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = FoodController