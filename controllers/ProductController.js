const { Product } = require('../models/product')

const ProductController = {
 create(req, res) {
   Product.create(req.body)
     .then((Product) => {
       book.addCategory(req.body.CategoryId)
       res.send(Product)
     })
     .catch((err) => console.error(err))
 }
}

module.exports = ProductController