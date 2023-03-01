// initailize db
const db = require("../dbconnect/dbconnect.js");
const Dept = db.department;
class DeptService {
  addDept(body) {
    return new Promise((resolve, reject) => {
      Dept.create({
        deptno: body.deptno,
        departmentName: body.departmentName,
        location: body.location,
        capacity: body.capacity,
      })
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  // get all dept from db
  getAllDept() {
    return new Promise((resolve,reject)=>{
        Dept.findAll()
        .then((result)=>{
            resolve(result);
        })
        .catch((error)=>{
            reject(result);
        })
    })
  }

  // get dept by deptNo
  getDeptByDeptNo(deptNo){
    return new Promise((resolve,reject)=>{
        Dept.findAll({
            where:{
                deptno: deptNo
            }
        })
        .then((result)=>{
            resolve(result);
        })
        .catch((error)=>{
            reject(error);
        })
    })
  }

  editDept(body, deptNo){
    return new Promise((resolve, reject) => {
        Dept.update({
        departmentName: body.departmentName,
        location: body.location,
        capacity: body.capacity,
        },{
            where : {
                deptno: deptNo
            }
        })
        .then((result)=>{
            resolve(result);
        })
        .catch((error)=>{
            reject(error);
        })
    })
  }

  // delete
  deleteDept(deptno){
    return new Promise((resolve, reject) =>{
        Dept.destroy({
            where : {
                deptno:deptno
            }
        })
        .then((result)=>{
            resolve(result);
        })
        .catch((error)=>{
            reject(error);
        })
    })
  }
}
module.exports = DeptService;
