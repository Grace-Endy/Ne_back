'use strict'

// feeditem
module.exports = function(sequelize, DataTypes) {
  let Feeditem = sequelize.define('feeditems', {
    category: {
      type: DataTypes.INTEGER
    },
    feedId: {
      type: DataTypes.INTEGER
    },
    besoinId: {
      type: DataTypes.INTEGER
    },
    activiteId: {
      type: DataTypes.INTEGER
    },
    adresseId: {
      type: DataTypes.INTEGER
    },
	  
  })

  Feeditem.associate = function(models) {
  Feeditem.belongsTo(models.Besoin)
  Feeditem.belongsTo(models.Feed)
  Feeditem.belongsTo(models.Activite)
  Feeditem.belongsTo(models.Adresse)
    }

  return Feeditem
}