'use strict'

// Adresse_favori
module.exports = function(sequelize, DataTypes) {
  let Adresse_favori = sequelize.define('adresse_favoris', {
    userId: {
      type: DataTypes.INTEGER
    },
    adresseId: {
      type: DataTypes.INTEGER
    }
  })

  Adresse_favori.associate = function(models) {
    Adresse_favori.belongsTo(models.User)
    Adresse_favori.belongsTo(models.Adresse)
  }

  return Adresse_favori
}