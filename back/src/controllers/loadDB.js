const { Category,Note } = require('../db')
const json = require("../infoJSON");

async function addCategories() {
    try {
      let categories = await Category.findAll();
      if (categories.length === 0) {
        json.categories.forEach(async(c) => {
          await Category.create({
            name: c.name,
          })
        })
      }
    } catch (error) {
      console.log(error.message);
    }
};
async function addNotes() {
    try {
      let notas = await Note.findAll();
      if (notas.length === 0) {
        json.notes.forEach( async(n) => {
          let newNote = await Note.create({
            title: n.title,
            content: n.content,
            isArchived: n.isArchived,
          });
          const cat = await Category.findAll({ where: { name: n.checked } });
          newNote.addCategory(cat)

        })
      }
    } catch (error) {
      console.log(error.message);
    }
};
  

module.exports = { addCategories,addNotes };