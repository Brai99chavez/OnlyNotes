const { Note,Category} = require('../../db')

async function filterByCategory(req, res) {
    const { category } = req.query
    try {
        let notes = await Note.findAll({ where: {isArchived:false}, order: [["id", "ASC"]] ,
        include: {
            model: Category,
            attributes: ['name'],
            through: { attributes: [] },
        }
    });
        res.status(200).json((notes.filter(n => (n.Categories.map(c => c.name)).includes(category))))
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { filterByCategory};