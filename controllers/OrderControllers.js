const {Order} = require('../models/order')

const OrderController = {
 create(req, res) {
   Order.create({ ...req.body, UserId: req.user.id })
     .then((Order) => {
       Order.addProduct(req.body.ProductId)
       res.status(201).send({ message: 'Pedido creado con éxito', Order})
     })
     .catch((err) => console.error(err))
 },

 async getAll(req, res) {
  try {
    const orders = await Order.findAll({
      include: [{ model: User, through: { attributes: [] } }]
    })
    res.send(orders)
  } catch (error) {
    console.error(error)
  }
},

async delete(req, res) {
 try {
   await Order.destroy({
     where: { id: req.params.id }
   })
   await OrderProduct.destroy({
     where: { UserId: req.params.id }
   })
   res.send({ message: 'El pedido ha sido eliminado' })
 } catch (error) {
   console.log(error)
 }
},

async update(req, res) {
 try {
   await Order.update(req.body, {
     where: { id: req.params.id }
   })
   const order = await Order.findByPk(req.params.id)
   order.setProduct(req.body.Product)
   res.send('Pedido actualizado con éxito')
 } catch (error) {
   console.error(error)
   res.status(500).send({ message: 'no ha sido posible actualizar el pedido' })
 }
}
}

module.exports = OrderController