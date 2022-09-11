const { Category } = require('../../db')




async function postCategory(req, res) {
    try {
        const { name } = req.body;
        
        let categories = await Category.findAll({ where: { name: name.toLowerCase() } });
        if (categories.length ) {
            res.status(404).send('el nombre ya existe')
        } else {
            await Category.create({ name });
            res.status(200).send('categoria creada')
        }
    } catch (error) {
        res.status(404).json(error)
    }
}

module.exports = { postCategory};