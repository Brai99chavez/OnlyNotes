const { Note,Category } = require('../../db')




async function postNote(req, res) {
    try {
        const { title,content,checked } = req.body;
        let newNote = await Note.create({ title, content });
        const cat = await Category.findAll({ where: { name: checked } });
        newNote.addCategory(cat)
        res.status(200).json('created')
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { postNote };