const express = require('express');

const PORT = process.env.PORT || 7011

const app = express();
app.use(express.json());

// initailize db
const db = require('./dbconnect/dbconnect.js');

app.listen(PORT,() =>{
    console.log(`Listening on PORT ${PORT}`);
})