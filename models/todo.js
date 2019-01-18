"use strict"
module.exports = (sequelize, DataTypes) => {
  var Todo = sequelize.define(
    "Todo",
    {
      text: DataTypes.STRING,
      status: DataTypes.STRING
    },
    {}
  )
  Todo.associate = function(models) {
    // associations can be defined here
  }
  return Todo
}
