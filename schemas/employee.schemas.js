const Joi = require("joi");

module.exports = {
  createEmployee: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    blood_group: Joi.string().required(),
    email: Joi.string().required(),
    job_title: Joi.string().required(),
    imageName: Joi.string().optional(),
    deptno: Joi.number().required()
  }),
  editEmployee: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    blood_group: Joi.string().required(),
    email: Joi.string().required(),
    job_title: Joi.string().required(),
    deptno: Joi.number().required()
  }),
};
