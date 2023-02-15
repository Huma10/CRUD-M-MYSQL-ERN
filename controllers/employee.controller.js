const db = require('../dbconnect/dbconnect.js');
const EmployeeService = require('../service/employee.service')
const Response = require('../service/Response');
const es = new EmployeeService();
const response = new Response();
const Employee = db.Employee;
exports.createEmployee = async (req,resp) =>{
    try {
        const employeeId = await es.generateEmployeeId();
        const employeeData = await es.addEmployee(req.body,employeeId);
        return resp.status(200).send(response.response(200,'OK','Employee Added Successfully','success'));
    } catch (error) {
        return resp.status(500).send(response.response(500,'Internet Server Error','Something went wrong','error'));
    }
    
}

exports.getAllEmployee = async (req,resp) =>{
    try {
        const employeeList = await es.getAllEmployee();
        return resp.status(200).send(response.response(200,'OK',employeeList,'success'));
    } catch (error) {
        return resp.status(500).send(response.response(500,'Internet Server Error','Something went wrong','error'));
    }
    
}

exports.getEmployeeById = async (req,resp) =>{
    try {
        const employeeList = await es.getEmployeeById(req.query.id);
        if(!employeeList && employeeList.length===0){
            return resp.status(404).send(response.response(404,'No Record found',employeeList,'error'));
        }
        return resp.status(200).send(response.response(200,'OK',employeeList,'success'));
    } catch (error) {
        return resp.status(500).send(response.response(500,'Internet Server Error','Something went wrong','error'));
    }
    
}

exports.editEmployee = async (req,resp) =>{
    try {
        const employeeId = req.query.id;
        const employeeData = await es.editEmployee(req.body,employeeId);
        return resp.status(200).send(response.response(200,'OK','Employee Updated Successfully','success'));
    } catch (error) {
        return resp.status(500).send(response.response(500,'Internet Server Error','Something went wrong','error'));
    }
    
}

exports.deleteEmployee = async (req,resp) =>{
    try {
         await es.deleteEmployee(req.query.id);
        return resp.status(200).send(response.response(200,'OK','Employee deleted successfully','success'));
    } catch (error) {
        return resp.status(500).send(response.response(500,'Internet Server Error','Something went wrong','error'));
    }
    
}