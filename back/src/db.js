require('dotenv').config();
const {Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
let sequelize =
  process.env.NODE_ENV === 'production'
    ? new Sequelize({
        database: DB_NAME,
        dialect: 'postgres',
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
        logging: false,
        native: false,
      });

const modelNote = require('./models/modelNote')
const modelCategory = require('./models/modelCategory')


modelCategory(sequelize)
modelNote(sequelize);


const { Note ,Category } = sequelize.models;


Note.belongsToMany(Category, { through: 'Note-Category' });
Category.belongsToMany(Note, { through: 'Note-Category' });


module.exports = {
    ...sequelize.models,
    conn: sequelize, 
}