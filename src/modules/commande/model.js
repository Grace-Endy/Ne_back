'use strict'

// commandes
module.exports = function(sequelize, DataTypes) {
  let Commande = sequelize.define('commandes', {
    commande_code: {
      type: DataTypes.STRING
    },
    produits: {
      type: DataTypes.STRING
    },
    livreurId : {
      type: DataTypes.INTEGER
    },
    userId : {
      type: DataTypes.INTEGER
    },
	  adresse_client: {
      type: DataTypes.TEXT
    },
    adresse_vendeur: {
      type: DataTypes.TEXT
    },
    prix_total: {
      type: DataTypes.TEXT
    },
    phone1: {
      type: DataTypes.TEXT
    },
     phone2: {
      type: DataTypes.TEXT
    },
    email1: {
      type: DataTypes.TEXT
    },  
    email2: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.INTEGER
    },
    payment_status: {
      type: DataTypes.INTEGER
    },
    date_arrival: {
      type: DataTypes.STRING
    },
    comment: {
      type: DataTypes.TEXT
    },
    payment_type: {
      type: DataTypes.TEXT
    },
    departement1: {
      type: DataTypes.INTEGER
    },
    ville1: {
      type: DataTypes.INTEGER
    },
    departement2: {
      type: DataTypes.INTEGER
    },
    ville2: {
      type: DataTypes.INTEGER
    },
    livraison_cost: {
      type: DataTypes.TEXT
    },
    system_fees: {
      type: DataTypes.STRING
    },
    livraison_duree: {
      type: DataTypes.INTEGER
    },
  })

   Commande.associate = function(models) {
  Commande.belongsTo(models.User, {as :"user", foreignKey:"userId", allowNull:false})
  Commande.belongsTo(models.User, {as :"livreur", foreignKey:"livreurId", allowNull:false})

    }

  return Commande
}