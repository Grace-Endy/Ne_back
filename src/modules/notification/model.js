"use strict"

// notifications
module.exports = function (sequelize, DataTypes) {
  let Notification = sequelize.define("notifications", {
    titre: {
      type: DataTypes.TEXT,
    },
    categorie: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.TEXT,
    },
    status: {
      type: DataTypes.TEXT,
    },
    mobile_route: {
      type: DataTypes.TEXT,
    },
    pc_route: {
      type: DataTypes.TEXT,
    },
    source_type: {
      type: DataTypes.TEXT,
    },
    read: {
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
  })

  Notification.associate = function (models) {
    Notification.belongsTo(models.User)
  }

  return Notification
}
