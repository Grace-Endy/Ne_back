"use strict"

// Calculateur
module.exports = function (sequelize, DataTypes) {
  let Calculateur = sequelize.define("calculateurs", {
    userId: {
      type: DataTypes.INTEGER,
    },
    besoinId: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    unite: {
      type: DataTypes.INTEGER,
    },
    fournisseur: {
      type: DataTypes.STRING,
    },
    devis_categorie: {
      type: DataTypes.INTEGER,
    },
  })

  Calculateur.associate = function (models) {
    Calculateur.belongsTo(models.User)
    Calculateur.belongsTo(models.Besoin)
  }

  return Calculateur
}
