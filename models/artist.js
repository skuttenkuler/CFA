
// Creating our Artist model

module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  });


  return Artist;
};
