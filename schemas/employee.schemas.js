const Joi = require("joi");

module.exports = {
  createEmployee: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    blood_group: Joi.string().required(),
    email: Joi.string().required(),
    job_title: Joi.string().required(),
  }),
  editEmployee: Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    blood_group: Joi.string().required(),
    email: Joi.string().required(),
    job_title: Joi.string().required(),
  }),
};
