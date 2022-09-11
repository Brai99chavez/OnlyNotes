const { Category } = require('../../db')

async function getCategories(req, res) {
    let categories = await Category.findAll({ order: [["id", "ASC"]] });
    try {
        res.status(200).json(categories)
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = { getCategories};