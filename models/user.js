
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      user: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return User;
  };
  