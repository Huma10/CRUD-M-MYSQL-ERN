# CRUD-M-MYSQL-ERN
# REST API in NodeJS using Express Js, Sequelize, MYSQL as a database.
# Initialize the repository with -- npm init.
# Create a folder structure
    1. controllers
    2. service
    3. models
    4. routes
    5. schemas
    6. dbconnect

# Install express -- npm i express

# Create database companydb in MYSQL. Add employee table.
    image.png

# Install this to Generate Models from table using sequelize.
    1. npm i -g sequelize sequelize-cli sequelize-auto
    2. npm install --save mysql2
    3. npm i -save sequelize sequelize-cli sequelize-auto

# Create dbconnect.js file inside dbconnect folder
    Add database configuration.

# run the following command to generate models
    `sequelize-auto -h localhost -d companydb -u [USERNAME] -x [PASWWORD] -p 3306 --dialect mysql -o models -t employee -l esm`
