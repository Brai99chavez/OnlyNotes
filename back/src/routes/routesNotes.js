const { Router } = require('express');
const router = Router();

const {getNotes} = require('../controllers/controllersNote/getNote')
const {getArchivedNotes} = require('../controllers/controllersNote/getArchivedNotes')
const {postNote} = require('../controllers/controllersNote/postNote')
const {archiveNote} = require('../controllers/controllersNote/archiveNote')
const {updateNote} = require('../controllers/controllersNote/updateNote');
const { deleteNotes } = require('../controllers/controllersNote/deleteNote');
const { getNotesById } = require('../controllers/controllersNote/getNoteById');
const { addCategory } = require('../controllers/controllersNote/addCategory');
const { removeCategory } = require('../controllers/controllersNote/removeCategory');
const { filterByCategory } = require('../controllers/controllersNote/filterByCategory');


router.get('/', getNotes);
router.get('/filter', filterByCategory);
router.post('/', postNote);
router.get('/archived', getArchivedNotes);
router.get('/:id', getNotesById);
router.put('/archive/:id', archiveNote);
router.put('/modify/:id', updateNote);
router.delete('/delete/:id', deleteNotes);
router.post('/addCategory/:id', addCategory);
router.post('/removeCategory/:id', removeCategory);

module.exports = router;