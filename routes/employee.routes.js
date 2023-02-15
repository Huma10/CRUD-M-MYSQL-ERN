const EmployeeController = require('../controllers/employee.controller')
module.exports = (app) =>{
    app.post('/create',EmployeeController.createEmployee);

    app.get('/employees',EmployeeController.getAllEmployee);

    app.get('/employee-details',EmployeeController.getEmployeeById);

    app.put('/edit-employee',EmployeeController.editEmployee);

    app.delete('/delete-employee',EmployeeController.deleteEmployee);
}