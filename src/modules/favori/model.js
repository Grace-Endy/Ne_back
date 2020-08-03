'use strict'

// Favori
module.exports = function(sequelize, DataTypes) {
  let Favori = sequelize.define('favoris', {
    userId: {
      type: DataTypes.INTEGER
    },
    besoinId: {
      type: DataTypes.INTEGER
    }
  })

  Favori.associate = function(models) {
    Favori.belongsTo(models.User)
    Favori.belongsTo(models.Besoin)
  }

  return Favori
}