'use strict'

// Adresses
module.exports = function(sequelize, DataTypes) {
  let Adresse = sequelize.define('adresses', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    departement: {
      type: DataTypes.INTEGER
    },
    ville: {
      type: DataTypes.INTEGER
    },
    adresse: {
      type: DataTypes.TEXT
    },
    vue: {
      type: DataTypes.TEXT
    },
    besoinId: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER
    },
    telephone: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.TEXT
    },
    whatsapp: {
      type: DataTypes.TEXT
    },
    facebook: {
      type: DataTypes.TEXT
    },
    youtube: {
      type: DataTypes.TEXT
    },
    twitter: {
      type: DataTypes.TEXT
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    },
    image2: {
      type: DataTypes.TEXT
    },
    image3: {
      type: DataTypes.TEXT
    }
  })
  Adresse.associate = function(models) {
  Adresse.belongsTo(models.User)
    }

  return Adresse
}