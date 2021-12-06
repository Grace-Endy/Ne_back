'use strict'

// abonnements
module.exports = function(sequelize, DataTypes) {
  let Abonnement = sequelize.define('abonnements', {
    name: {
      type: DataTypes.STRING
    },
    nombre_de_mois: {
      type: DataTypes.TEXT
    },
    prix: {
      type: DataTypes.TEXT
    },
	  date_commencement: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.TEXT
    },
    date_fin: {
      type: DataTypes.TEXT
    },
    date_request: {
      type: DataTypes.TEXT
    },
    phone_client: {
      type: DataTypes.TEXT
    },
    nombreProduits: {
      type: DataTypes.TEXT
    },
    nombreAdresse: {
      type: DataTypes.TEXT
    },
    nombreActivites: {
      type: DataTypes.TEXT
    },
    publicite: {
      type: DataTypes.TEXT
    },
    publiciteInfo: {
      type: DataTypes.TEXT
    },
    numberoWhatsapp: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER
    }
  })

   Abonnement.associate = function(models) {
  Abonnement.belongsTo(models.User)
    }

  return Abonnement
}