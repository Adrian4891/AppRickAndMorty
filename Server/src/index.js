const server = require("./app");
require("dotenv").config();
const { PORT } = process.env;
const { sequelize } = require("./DB_connection");
const saveApiData = require("./controllers/saveApiData");

 sequelize.sync({force : false}).then(async()=>{
    await saveApiData()

  server.listen(PORT, ()=>{
    console.log(PORT);
  });
 
});