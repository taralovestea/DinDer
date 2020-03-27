
module.exports = function(sequelize, DataTypes) {
  var Matches = sequelize.define("Matches", {
    user1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    likedUser: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Matches;
};
