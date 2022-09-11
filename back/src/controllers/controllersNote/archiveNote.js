const { Note } = require('../../db')


async function archiveNote(req, res) {
    const {id} = req.params
    const {update} = req.body
    try {
        const note = await Note.findByPk(id)
        await note.update({isArchived:update === 'archivar' ? true : false});
        res.status(200).send('archivado')
    } catch (error) {
        res.status(404).send(error)
    }

}

module.exports = { archiveNote };