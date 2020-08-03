'use strict'

// Favori2
module.exports = function(sequelize, DataTypes) {
  let Favori2 = sequelize.define('favoris2', {
    userId: {
      type: DataTypes.INTEGER
    },
    activiteId: {
      type: DataTypes.INTEGER
    }
  })

  Favori2.associate = function(models) {
    Favori2.belongsTo(models.User)
    Favori2.belongsTo(models.Activite)
  }

  return Favori2
}