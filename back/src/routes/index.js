const { Router } = require('express');
const router = Router();
// Importar todos los routers;
const Categories = require('./routesCategories');
const Notes = require('./routesNotes');





router.use('/notes', Notes);

router.use('/categories', Categories)

module.exports = router;