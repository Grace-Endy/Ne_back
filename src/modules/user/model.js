'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    slug: {
      type: DataTypes.TEXT
    },
    numero_principal: {
      type: DataTypes.TEXT
    },
    numero_whatsapp: {
      type: DataTypes.TEXT
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
    image: {
      type: DataTypes.TEXT
    },
    type_de_compte: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Favori)
    User.hasMany(models.FavoriAdresse)
    User.hasMany(models.Favori2)
    User.hasMany(models.Calculateur)
    User.hasMany(models.Besoin)
    User.hasMany(models.Adresse)
    User.hasMany(models.Activite)
  }

  return User
}