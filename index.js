const express = require('express');

const PORT = process.env.PORT || 7011

const app = express();
app.use(express.json());

// initailize db
const db = require('./dbconnect/dbconnect.js');
db.sequelize.sync();
app.listen(PORT,() =>{
    console.log(`Listening on PORT ${PORT}`);
})
// routes
require('./routes/employee.routes')(app); // This 2 lines can be written separately
// const routes = require('./routes/employee.routes')(app);
// routes(app)
require('./routes/auth.routes')(app);