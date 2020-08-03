'use strict'

// activitee
module.exports = function(sequelize, DataTypes) {
  let Activite = sequelize.define('activites', {
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
	  gender: {
      type: DataTypes.INTEGER
    },
    departement: {
      type: DataTypes.INTEGER
    },
    ville: {
      type: DataTypes.INTEGER
    },
    local: {
      type: DataTypes.STRING
    },
    datejour1: {
      type: DataTypes.STRING
    },
    datemois1: {
      type: DataTypes.STRING
    },
    dateannee1: {
      type: DataTypes.STRING
    },
	  datejour2: {
      type: DataTypes.STRING
    },
    datemois2: {
      type: DataTypes.STRING
    },
    dateannee2: {
      type: DataTypes.STRING
    },
    heureheure1: {
      type: DataTypes.STRING
    },
    heureminute1: {
      type: DataTypes.STRING
    },
    heureterminaison1: {
      type: DataTypes.STRING
    },
	  heureheure2: {
      type: DataTypes.STRING
    },
    heureminute2: {
      type: DataTypes.STRING
    },
    heureterminaison2: {
      type: DataTypes.STRING
    },
    prix: {
      type: DataTypes.STRING
    },
    prix_devise: {
      type: DataTypes.STRING
    },
    artiste: {
      type: DataTypes.STRING
    },
	  dj: {
      type: DataTypes.STRING
    },
	organisateur: {
      type: DataTypes.STRING
    },
	lieux_achat: {
      type: DataTypes.STRING
    },
	userId: {
      type: DataTypes.INTEGER
    },
	vue: {
      type: DataTypes.STRING
    },
	phone: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.TEXT
    }
  })

Activite.associate = function(models) {
  Activite.belongsTo(models.User)
    }

  return Activite
}