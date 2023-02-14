import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _employee from  "./employee.js";

export default function initModels(sequelize) {
  const employee = _employee.init(sequelize, DataTypes);


  return {
    employee,
  };
}
