const server = require('./src/server.js');
const { conn } = require('./src/db.js');
const { addCategories, addNotes } = require('./src/controllers/loadDB.js');



conn.sync({ force: false }).then(() => {
    server.listen(process.env.PORT || 3001, async () => {
        await addCategories();
        await addNotes();
      console.log('%s listening at 3001');
    });
  });
