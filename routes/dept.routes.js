const DeptController = require('../controllers/dept.controller');

module.exports = (app) =>{
    app.post('/create-dept', DeptController.createDept);

    app.get('/departments', DeptController.getAllDept);

    app.get('/departments-details', DeptController.getDeptById);

    app.put('/update-dept', DeptController.updateDept);

    app.delete('/delete-dept', DeptController.deleteDept);
}