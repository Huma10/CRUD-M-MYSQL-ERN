const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'companydb',
    'root',
    '',
    {
        host:'localhost',
        port:'3306',
        dialect:'mysql'
    }
)

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });