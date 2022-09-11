const { Note } = require('../../db')

async function deleteNotes(req, res) {
    const { id } = req.params
    try {

        let note = await Note.findByPk(id);
        note.destroy()
        res.status(200).json('eliminado')
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { deleteNotes};