const category = require('../models/category')
const { Product } = require('../models/category')

const CategoryController = {
 insert(req, res) {
   Category.create(req.body)
     .then((Category) => {
    res.send('La categoria ha sido agregada correctamente')
     })
     .catch((err) => console.error(err))
 }
}

module.exports = CategoryController