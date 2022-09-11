const { Note,Category } = require('../../db')

async function getNotes(req, res) {

    let notes = await Note.findAll({
        include: {
            model: Category,
            attributes: ['name'],
            through: { attributes: [] },
        },
        where: {
            isArchived: false,
        }, order: [["id", "ASC"]]

    });
    
    try { 
        res.status(200).json(notes)
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { getNotes};