const db = require('../dbconnect/dbconnect.js');
const EmployeeService = require('../service/employee.service')
const ImageController = require('../controllers/imageupload.controller')
const employeeSchema = require('../schemas/employee.schemas')
const Util = require('../helper/util')
const Response = require('../service/Response');
const es = new EmployeeService();
const response = new Response();
const Employee = db.Employee;
exports.createEmployee = async (req,resp) =>{
    try {
        const {body} = req;

        console.log("body >>"+body);
        const employeeRequestValidation = await employeeSchema.createEmployee.validateAsync(body);
        console.log("value of >> "+employeeRequestValidation);
        if(employeeRequestValidation){
            const employeeId = await es.generateEmployeeId();
            const employeeData = await es.addEmployee(req.body,employeeId);
          //  await ImageController.uploadImageToS3Bucket(req,resp);
            return resp.status(200).send(response.response(200,'OK','Employee Added Successfully','success'));
        }       
    } catch (error) {
        if(error && error.details){
            console.log("Validation failed",error.details);
            return resp.status(400).send(response.response(400,'Bad Request',Util.joiErrorMessage(error),'error'));
        }
        console.log(error);
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
    const {body} = req;
    try {
        const employeeRequestValidation = await employeeSchema.editEmployee.validateAsync(body);
        if(employeeRequestValidation){
            const employeeId = req.query.id;
            const employeeData = await es.editEmployee(req.body,employeeId);
            return resp.status(200).send(response.response(200,'OK','Employee Updated Successfully','success'));
        }
        
    } catch (error) {
        if(error && error.details){
            console.log("Validation failed",error.details);
            return resp.status(400).send(response.response(400,'Bad Request',Util.joiErrorMessage(error),'error'));
        }
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