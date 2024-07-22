require('dotenv').config();
const  DB_URL  = process.env.DB_URL;
const { Sequelize } = require("sequelize");
const characterModel = require("./models/Character");
const favoriteModel = require("./models/Favorite");

const sequelize = new Sequelize(DB_URL,{
   logging: false, 
   native: false
   dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Ajusta esto según tu configuración de certificados
      }
    }
});

characterModel(sequelize);
favoriteModel(sequelize);

module.exports = {
    ...sequelize.models,
    sequelize,
}
