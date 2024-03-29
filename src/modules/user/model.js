"use strict"

// User
module.exports = function (sequelize, DataTypes) {
  let User = sequelize.define("users", {
    name: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
    },
    slug: {
      type: DataTypes.TEXT,
    },
    numero_principal: {
      type: DataTypes.TEXT,
    },
    numero_whatsapp: {
      type: DataTypes.TEXT,
    },
    departement: {
      type: DataTypes.INTEGER,
    },
    ville: {
      type: DataTypes.INTEGER,
    },
    adresse: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.TEXT,
    },
    type_de_compte: {
      type: DataTypes.TEXT,
    },
    debut_abonnement: {
      type: DataTypes.TEXT,
    },
    fin_abonnement: {
      type: DataTypes.TEXT,
    },
    nombre_de_besoins: {
      type: DataTypes.TEXT,
    },
    nombre_de_besoins_total: {
      type: DataTypes.TEXT,
    },
    nombre_de_activite: {
      type: DataTypes.TEXT,
    },
    nombre_de_activite_total: {
      type: DataTypes.TEXT,
    },
    nombre_de_adresse: {
      type: DataTypes.TEXT,
    },
    nombre_de_adresse_total: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.TEXT,
    },
    opt_code: {
      type: DataTypes.TEXT,
    },
    registrationToken: {
      type: DataTypes.TEXT,
    },
  })

  User.associate = function (models) {
    User.hasMany(models.Favori)
    User.hasMany(models.FavoriAdresse)
    User.hasMany(models.Favori2)
    User.hasMany(models.Calculateur)
    User.hasMany(models.Besoin)
    User.hasMany(models.Abonnement)
    User.hasMany(models.Adresse)
    User.hasMany(models.Contact)
    User.hasMany(models.Prix)
    User.hasMany(models.Activite)
    User.hasMany(models.Commande, { as: "user", foreignKey: "userId" })
    User.hasMany(models.Commande, { as: "livreur", foreignKey: "livreurId" })
  }

  return User
}
