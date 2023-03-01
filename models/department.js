module.exports = (sequelize, Sequelize) =>
  sequelize.define("dept", {
    deptno: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    departmentName: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    location: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    capacity: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
  });
