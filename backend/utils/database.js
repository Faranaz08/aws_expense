const  Sequelize  = require("sequelize");
const dotenv=require("dotenv");

//get config vars
dotenv.config();
//

const sequelize = new Sequelize(process.env.DB_SCHEMA,process.env.DB_USER,process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

module.exports = sequelize;
