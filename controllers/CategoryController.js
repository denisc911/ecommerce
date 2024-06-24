const { Category } = require('../models/index')

const CategoryController = {
 create(req, res) {
  console.log("holi")
  console.log(req.body);
   Category.create(req.body)
     .then((Category) => {
    res.send({message: 'La categoria ha sido agregada correctamente', Category})
     })
     .catch((err) => console.error(err))
 }
}

module.exports = CategoryController;
// const { Category } = require('../models/category');

// module.exports = {
//   async create(req, res) {
//     try {
//       const category = await Category.create(req.body);
//       return res.status(201).json(category);
//     } catch (error) {
//       return res.status(400).json({ error: error.message });
//     }
//   },

//   async findAll(req, res) {
//     try {
//       const categories = await Category.findAll();
//       return res.status(200).json(categories);
//     } catch (error) {
//       return res.status(400).json({ error: error.message });
//     }
//   },

//   async findOne(req, res) {
//     try {
//       const category = await Category.findByPk(req.params.id);
//       if (!category) {
//         return res.status(404).json({ error: 'Category no existe' });
//       }
//       return res.status(200).json(category);
//     } catch (error) {
//       return res.status(400).json({ error: error.message });
//     }
//   },

//   async update(req, res) {
//     try {
//       const [updated] = await Category.update(req.body, {
//         where: { id: req.params.id }
//       });
//       if (!updated) {
//         return res.status(404).json({ error: 'Categoria no encontrada' });
//       }
//       const updatedCategory = await Category.findByPk(req.params.id);
//       return res.status(200).json(updatedCategory);
//     } catch (error) {
//       return res.status(400).json({ error: error.message });
//     }
//   },

//   async delete(req, res) {
//     try {
//       const deleted = await Category.destroy({
//         where: { id: req.params.id }
//       });
//       if (!deleted) {
//         return res.status(404).json({ error: 'Categoria no existe' });
//       }
//       return res.status(204).send();
//     } catch (error) {
//       return res.status(400).json({ error: error.message });
//     }
//   }
// };
