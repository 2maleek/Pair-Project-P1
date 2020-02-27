const ModelFood = require(`../models`).Food

class FoodController {

    static show (req, res) {
        
        ModelFood.findAll()
        .then(food => {
            res.render('home', { food })
            // res.send(food)
        })
        .catch(err => {
            res.send(err)
        })
    }

    static add (req, res) {
        let minus = req.body.quantity
        let foodId = req.body.id
        let kurang = null
        let idKurang = null
        minus.forEach((i,index)=> {
            if (i != 0){
                kurang = i
                idKurang = foodId[index]
            }
        })
        ModelFood.findByPk(idKurang)
        .then(data => {
            // res.send(data)
            let stockUpdate = Number(data.stock - kurang)
            let obj = {
                stock:stockUpdate
            }
            return ModelFood.update(obj, {where:{id:idKurang}})
        })
        .then(data => {
            res.redirect(`/foods`)
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = FoodController