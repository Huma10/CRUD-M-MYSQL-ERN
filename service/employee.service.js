// initailize db
const db = require('../dbconnect/dbconnect.js');
const { QueryTypes } = require('@sequelize/core');
const Sequelize = db.sequelize;
const Employee = db.employee;
class EmployeeService {
    
    addEmployee(body,employeeId) {
        return new Promise((resolve,reject)=>{    
            Employee.create({
                name:body.name,
                age:body.age,
                blood_group:body.bloodGroup,
                email:body.email,
                job_title:body.jobTitle,
                employee_id:employeeId
            }).then((result)=>{
                resolve(result);
            }).catch((err)=>{
                reject(err);
            });
        })
    }

    getAllEmployee(){
        return new Promise((resolve, reject)=>{
            Employee.findAll()
            .then((result)=>{
                resolve(result)
            }).catch((result)=>{
                reject(result)
            })
        })
    }

    getEmployeeById(id){
        return new Promise((resolve, reject)=>{
            Employee.findAll({where:{id}})
            .then((result)=>{
                resolve(result)
            }).catch((result)=>{
                reject(result)
            })
        })
    }

    
    generateEmployeeId() {
        return new Promise((resolve,reject)=>{
            db.sequelize.query(`(SELECT employee_id FROM employees ORDER BY employees.createdAt DESC, id DESC LIMIT 1);`
            , {type: QueryTypes.SELECT}).then((result)=>{
                console.log(JSON.stringify(result.employee_id));
                const Employeeid = (!result || !result.length || !result[0].employee_id) ? 1: (parseInt((result[0].employee_id))+1)
                console.log(">>>>>>"+Employeeid);
                resolve(Employeeid)
            }).catch((err)=>{
                reject(err)
            })
        });
    }

    editEmployee(body,employeeId) {
        return new Promise((resolve,reject)=>{    
            Employee.update({
                name:body.name,
                age:body.age,
                blood_group:body.bloodGroup,
                email:body.email,
                job_title:body.jobTitle,
                employee_id:employeeId
            },{where:{id:employeeId}}).then((result)=>{
                resolve(result);
            }).catch((err)=>{
                reject(err);
            });
        })
    }

    deleteEmployee(id){
        return new Promise((resolve, reject)=>{
            Employee.destroy({where:{id}})
            .then((result)=>{
                resolve(result)
            }).catch((result)=>{
                reject(result)
            })
        })
    }
}
module.exports = EmployeeService;