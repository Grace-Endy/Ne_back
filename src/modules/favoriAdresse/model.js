'use strict'

// favoriAdresse
module.exports = function(sequelize, DataTypes) {
  let FavoriAdresse = sequelize.define('favorisadresses', {
    userId: {
      type: DataTypes.INTEGER
    },
    adresseId: {
      type: DataTypes.INTEGER
    },
    adressId: {
      type: DataTypes.INTEGER
    }
  })

  FavoriAdresse.associate = function(models) {
    FavoriAdresse.belongsTo(models.User)
    FavoriAdresse.belongsTo(models.Adresse)
  }

  return FavoriAdresse
}