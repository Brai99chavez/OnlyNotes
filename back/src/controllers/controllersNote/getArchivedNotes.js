const { Note,Category } = require('../../db')



async function getArchivedNotes(req, res) {
    let notes = await Note.findAll({ where: {isArchived:true},order: [["id", "ASC"]],        include: {
        model: Category,
        attributes: ['name'],
        through: { attributes: [] },
    } });
    try {
        res.status(200).json(notes)
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { getArchivedNotes};