const { Router } = require('express');
const router = Router();

const {getCategories} = require('../controllers/controllersCategory/getCategories')
const { postCategory} = require('../controllers/controllersCategory/postCategory')

router.get('/', getCategories);
router.post('/',postCategory);


module.exports = router;