# REST API in NodeJS using Express Js, Sequelize, MYSQL as a database.
## In this repository, I have created API for CRUD Operation using NodeJS, Express JS as framework. Sequelize ORM, and the database used is MYSQL.

## 1. Initialize the repository with -- npm init.
## 2. Create a folder structure
    1. controllers
    2. service
    3. models
    4. routes
    5. schemas
    6. dbconnect
## 3. Install the following packages
    1. express: -- npm i express
    2. npm i -g sequelize sequelize-cli sequelize-auto
    3. npm install --save mysql2
    4. npm i -save sequelize sequelize-cli sequelize-auto
## 4. Create dbconnect.js file inside dbconnect folder
    1. Configure the database connection.
## 5. Create Models
    1. Create employee.js and department.js model.(It would represent the table in your database)
    2. Now, in index.js file, include the dbconnect.js file and enter this `db.sequelize.sync({force:true});`(It would syncronise your database with the models)
    3. Note: db.sequelize.sync({force:false}); (Keep it false otherwise whenever server is started then database would be dropped again)
## 6. Establishing Primary and Foreign Key relationship between employee table and department
    1. Inside dbconnect.js. Include both the models.
    2.  db.employee.belongsTo(db.department,{ foreignKey: 'deptno', });
        db.department.hasOne(db.employee,{foreignKey:'deptno'});
## 6. Create EmployeeService and DepartmentService    
## 7. Create Controllers for Employee and Department.
## 8. Create Routes for Both.
## 9. Inside Schema, we are validating the request using JOI validator.
## 10. At last, inside index.js file, include the routes.
