const { Note ,Category} = require('../../db')

async function getNotesById(req, res) {
    try {
    const { id } = req.params
    let note = await Note.findAll({ where: {id:id},include: {
        model: Category,
        attributes: ['name'],
        through: { attributes: [] },
    }
    });
        res.status(200).json(note[0].dataValues)
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { getNotesById};