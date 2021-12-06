// App Imports
import models from "../../setup/models"

// Get all Notifications
export async function getAll() {
  return await models.Notification.findAll({
    order: [["id", "DESC"]],
    include: [{ model: models.User, as: "user" }],
  })
}

// Get Notification by ID
export async function getById(parentValue, { notificationId }) {
  const notification = await models.Notification.findOne({
    where: { id: notificationId },
    include: [{ model: models.User, as: "user" }],
  })

  if (!notification) {
    // Notification does not exists
    throw new Error(
      "Il semble que la Notification que vous recherchez n'existe pas ou a été retirée."
    )
  } else {
    return notification
  }
}

// Get Notification by user
export async function getByUser(parentValue, {}, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Notification.findAll({
      where: {
        userId: auth.user.id,
      },
      include: [{ model: models.User, as: "user" }],
    })
  } else {
    throw new Error("S'il vous plait,connecter pour voir vos Notifications..")
  }
}

export async function getUnReadNotifications(parentValue, {}, { auth }) {
  if (auth.user && auth.user.id > 0) {
    return await models.Notification.findAll({
      where: {
        userId: auth.user.id,
        read: 1,
      },
      order: [["id", "DESC"]],
      include: [{ model: models.User, as: "user" }],
    })
  } else {
    throw new Error("S'il vous plait,connecter pour voir vos Notifications..")
  }
}

export async function getNotificationAnnounce() {
  return await models.Notification.findAll({
    order: [[models.Sequelize.fn("RAND")]],
    limit: 1,
    include: [{ model: models.User, as: "user" }],
  })
}

// Get related Notifications by UserId
export async function getRelatedByUserId(parentValue, { userId }) {
  return await models.Notification.findAll({
    where: {
      userId: userId,
    },
    order: [["id", "DESC"]], // mock related Notification by showing random Notification
  })
}

// Create Notification
export async function create(
  parentValue,
  {
    titre,
    categorie,
    description,
    status,
    mobile_route,
    pc_route,
    source_type,
    read,
    userId,
  },
  { auth }
) {
  if (auth.user && 1 === 1) {
    return await models.Notification.create({
      titre,
      categorie,
      description,
      status,
      mobile_route,
      pc_route,
      source_type,
      read,
      userId,
    })
  } else {
    throw new Error("Operation Interdite.")
  }
}

// Update Notification
export async function update(
  parentValue,
  {
    id,
    titre,
    categorie,
    description,
    status,
    mobile_route,
    pc_route,
    source_type,
    read,
    userId,
  },
  { auth }
) {
  if (auth.user && 1 === 1) {
    return await models.Notification.update(
      {
        titre,
        categorie,
        description,
        status,
        mobile_route,
        pc_route,
        source_type,
        read,
        userId,
      },
      { where: { id } }
    )
  } else {
    throw new Error("Operation Interdite.")
  }
}

// Update read Status - Notification
export async function updateRead(
  parentValue,
  {
    id,
    read,
    userId,
  },
  { auth }
) {
  if (auth.user && 1 === 1) {
    return await models.Notification.update(
      {
        read,
        userId,
      },
      { where: { id } }
    )
  } else {
    throw new Error("Operation Interdite.")
  }
}


// Delete Notification
export async function remove(parentValue, { id }, { auth }) {
  if (auth.user) {
    const notification = await models.Notification.findOne({ where: { id } })

    if (!notification) {
      // Notification does not exists
      throw new Error("Cet notification n'existe pas")
    } else {
      return await models.Notification.destroy({
        where: { id },
      })
    }
  } else {
    throw new Error("Operation Interdite.")
  }
}
