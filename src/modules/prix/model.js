'use strict'

// Prix
module.exports = function(sequelize, DataTypes) {
  let Prix = sequelize.define('prixs', {
    userId: {
      type: DataTypes.INTEGER
    },
     prix_unite: {
      type: DataTypes.TEXT
    },
    prix_unite_devise: {
      type: DataTypes.TEXT
    },
    prix_stock: {
      type: DataTypes.TEXT
    },
     prix_stock_devise: {
      type: DataTypes.TEXT
    },
    stock_unite: {
      type: DataTypes.TEXT
    },  
    besoinId: {
      type: DataTypes.INTEGER
    },
    adresseId: {
      type: DataTypes.INTEGER
    },
    vendeur: {
      type: DataTypes.TEXT
    },
    vendeur_slug: {
      type: DataTypes.TEXT
    },
    adresse_vendeur: {
      type: DataTypes.TEXT
    },
    phone_vendeur: {
      type: DataTypes.TEXT
    },
    departement: {
      type: DataTypes.INTEGER
    },
    ville: {
      type: DataTypes.INTEGER
    },
  })

  Prix.associate = function(models) {
    Prix.belongsTo(models.User)
    Prix.belongsTo(models.Besoin)
  }

  return Prix
}