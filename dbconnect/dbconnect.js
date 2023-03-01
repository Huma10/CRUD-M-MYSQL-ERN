const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'companydb',
    'root',
    'root',
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

 const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//db.employee = require('../models/employee')(sequelize,Sequelize);// for calling
const employee = require('../models/employee');
db.employee = employee(sequelize,Sequelize);

db.department = require('../models/department')(sequelize,Sequelize);


// pk and fk relationship
db.employee.belongsTo(db.department,{ foreignKey: 'deptno', });
db.department.hasOne(db.employee,{foreignKey:'deptno'});

module.exports = db;