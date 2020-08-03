'use strict'

// besoins
module.exports = function(sequelize, DataTypes) {
  let Besoin = sequelize.define('besoins', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    categorie: {
      type: DataTypes.INTEGER
    },
	  gender: {
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
    image: {
      type: DataTypes.TEXT
    },
    image2: {
      type: DataTypes.TEXT
    },
    image3: {
      type: DataTypes.TEXT
    },
    vendeur: {
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
    specification: {
      type: DataTypes.TEXT
    },
    rating: {
      type: DataTypes.STRING
    },
    vue: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER
    },
    likes: {
      type: DataTypes.STRING
    }
  })

   Besoin.associate = function(models) {
  Besoin.belongsTo(models.User)
    }

  return Besoin
}