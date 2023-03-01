const dept = require('../service/dept.service');
const Response = require('../service/Response');

const response = new Response();
const DeptModel = new dept();

exports.createDept = async(req, resp) =>{
    try {
        const {body} = req;
    const deptData = await DeptModel.addDept(body);
    console.log(deptData);
    return resp.status(200).send(response.response(200,'Ok','Department Added Successfully','success'))
    } catch (error) {
        return resp.status(500).send(response.response(500,'Internal Server Error','Something went wrong','error'))
    }
    
}