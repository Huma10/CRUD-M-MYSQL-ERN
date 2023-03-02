const Joi = require('joi');

const createDept = Joi.object().keys({
    departmentName: Joi.string().required(),
    location: Joi.string().required(),
    capacity: Joi.number().required()
})

const editSchema = Joi.object().keys({
    departmentName: Joi.string().required(),
    location: Joi.string().required(),
    capacity: Joi.number().required()
})

const DeptSchema = {
    createDept,
    editSchema
}
module.exports = DeptSchema;