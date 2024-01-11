require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const { Sequelize } = require("sequelize");
const characterModel = require("./models/Character");
const favoriteModel = require("./models/Favorite");

const URL = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const sequelize = new Sequelize(URL,
   {logging: false, native: false}
);

characterModel(sequelize);
favoriteModel(sequelize);

module.exports = {
    ...sequelize.models,
    sequelize,
}