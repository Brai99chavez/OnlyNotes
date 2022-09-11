const { Note,Category } = require('../../db')


async function addCategory(req, res) {
    const {id} = req.params
    const { categories } = req.body
    try {
        const note = await Note.findByPk(id)
        const cat = await Category.findAll({ where: { name: categories } });
        note.addCategory(cat)
        res.status(200).send('agregado')
    } catch (error) {
        res.status(404).send(error)
    }

}

module.exports = { addCategory };