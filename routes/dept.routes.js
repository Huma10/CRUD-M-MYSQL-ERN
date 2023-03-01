const DeptController = require('../controllers/dept.controller');

module.exports = (app) =>{
    app.post('/create-dept', DeptController.createDept);
}