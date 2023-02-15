module.exports= (sequelize,Sequelize) => sequelize.define('employee', {
  id: {
      autoIncrement: true,
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    name: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    blood_group: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: true
    },
    job_title: {
      type: Sequelize.STRING(255),
      allowNull: true
    }
  });
 