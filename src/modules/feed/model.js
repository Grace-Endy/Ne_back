'use strict'

// feed
module.exports = function(sequelize, DataTypes) {
  let Feed = sequelize.define('feeds', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    categorie: {
      type: DataTypes.INTEGER
    },
	  position: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    departement: {
      type: DataTypes.INTEGER
    },
    ville: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    },
    image2: {
      type: DataTypes.STRING
    },
    image3: {
      type: DataTypes.STRING
    },
    identity: {
      type: DataTypes.STRING
    },
    visible: {
      type: DataTypes.STRING
    },
    delai: {
      type: DataTypes.STRING
    },
    date_delai: {
      type: DataTypes.STRING
    },
	  show_delai: {
      type: DataTypes.STRING
    },
  })

  return Feed
}