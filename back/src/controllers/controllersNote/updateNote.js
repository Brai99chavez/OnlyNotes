const { Note ,Category} = require('../../db')




async function updateNote(req, res) {
    try {
        const {id} = req.params
        const { title, content, checked } = req.body;

        const note = await Note.findByPk(id)
        const cat = await Category.findAll({ where: { name: checked } });
        const allCat = await Category.findAll();
        await note.update({ title: title, content: content });
        await note.removeCategory(allCat)
        await note.addCategory(cat)
        res.status(200).send('modificado')
    } catch (error) {
        
        res.status(404).send(error)
    }
}

module.exports = { updateNote };