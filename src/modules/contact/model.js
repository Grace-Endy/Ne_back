'use strict'

// contact
module.exports = function(sequelize, DataTypes) {
  let Contact = sequelize.define('contacts', {
    name: {
      type: DataTypes.TEXT
    },
    slug: {
      type: DataTypes.TEXT
    },
    adresse_abonne: {
      type: DataTypes.TEXT
    },
	  sexe: {
      type: DataTypes.TEXT
    },
    departement: {
      type: DataTypes.TEXT
    },
    ville: {
      type: DataTypes.TEXT
    },
    date_de_naissance: {
      type: DataTypes.TEXT
    },
    telephone: {
      type: DataTypes.TEXT
    },
    interet: {
      type: DataTypes.TEXT
    },
    })


  return Contact
}