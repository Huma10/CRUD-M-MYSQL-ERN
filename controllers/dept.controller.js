const dept = require('../service/dept.service');
const Response = require('../service/Response');
const DeptSchema = require('../schemas/dept.schema');
const Util = require('../helper/util')
const response = new Response();
const DeptModel = new dept();

exports.createDept = async (req, resp) => {
    try {
        const { body } = req;
        const reqBodyValidation = await DeptSchema.createDept.validateAsync(body);
        if (reqBodyValidation) {
            const deptData = await DeptModel.addDept(body);
            console.log(deptData);
        }
        return resp.status(200).send(response.response(200, 'Ok', 'Department Added Successfully', 'success'))
    } catch (error) {
        if (error && error.details) {
            console.log("Validation failed", error.details);
            return resp.status(400).send(response.response(400, 'Bad Request', Util.joiErrorMessage(error), 'error'));
        }
        return resp.status(500).send(response.response(500, 'Internal Server Error', 'Something went wrong', 'error'))
    }

}

exports.getAllDept = async (req, resp) => {
    try{
        const listOfDept = await DeptModel.getAllDept();
        return resp.status(200).send(response.response(200,'OK',listOfDept,'success'))
    } catch(error) {
        return resp.status(500).send(response.response(500, 'Internal Server Error', 'Something went wrong', 'error'))
    }
}

exports.getDeptById = async (req,resp) => {
    try {
        const deptNo = req.query.deptno;
        const deptData = await DeptModel.getDeptByDeptNo(deptNo);
        return resp.status(200).send(response.response(200,'OK',deptData,'success'))
    } catch (error) {
        console.log(error);
        return resp.status(500).send(response.response(500, 'Internal Server Error', 'Something went wrong', 'error'))
    }
}

exports.updateDept = async (req,resp) => {
    try {
        const {body} = req;
        const reqBodyValidation = await DeptSchema.editSchema.validateAsync(body);
        if(reqBodyValidation){
            await DeptModel.editDept(body, req.query.deptno);
            return resp.status(200).send(response.response(200,'OK','Department Updated Successfully','success'))
        }       
    } catch (error) {
        if (error && error.details) {
            console.log("Validation failed", error.details);
            return resp.status(400).send(response.response(400, 'Bad Request', Util.joiErrorMessage(error), 'error'));
        }
        return resp.status(500).send(response.response(500, 'Internal Server Error', 'Something went wrong', 'error'))
    }
}

exports.deleteDept = async (req, resp) => {
    try {
        await DeptModel.deleteDept(req.query.deptno);
        return resp.status(200).send(response.response(200,'OK','Department Deleted Successfully','success'))
    } catch (error) {
        return resp.status(500).send(response.response(500, 'Internal Server Error', 'Something went wrong', 'error'))
    }
}