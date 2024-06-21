const Product = require('../models/product')
const { Product } = require('../models/product')

const ProductController = {
 create(req, res) {
   Product.create(req.body)
     .then((Product) => {
       Product.addCategory(req.body.CategoryId)
       res.status(201).send({ message: 'Producto creado con éxito', Product})
     })
     .catch((err) => console.error(err))
 }
}

module.exports = ProductController