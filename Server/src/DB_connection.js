require('dotenv').config();
const { DB_URL } = process.env;
const { Sequelize } = require("sequelize");
const characterModel = require("./models/Character");
const favoriteModel = require("./models/Favorite");

const sequelize = new Sequelize(DB_URL,
   {logging: false, native: false}
);


characterModel(sequelize);
favoriteModel(sequelize);

module.exports = {
    ...sequelize.models,
    sequelize,
}