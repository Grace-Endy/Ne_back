// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from "graphql"

// App Imports
import { NotificationType } from "./types"
import {
  getAll,
  getNotificationAnnounce,
  getByUser,
  getById,
  getUnReadNotifications,
  getRelatedByUserId,
} from "./resolvers"

// Notifications All
export const notifications = {
  type: new GraphQLList(NotificationType),
  resolve: getAll,
}

export const notificationsAnounce = {
  type: new GraphQLList(NotificationType),
  resolve: getNotificationAnnounce,
}

// Notification By ID
export const notificationById = {
  type: NotificationType,
  args: {
    notificationId: { type: GraphQLInt },
  },
  resolve: getById,
}

// Notifications by user
export const notificationsByUser = {
  type: new GraphQLList(NotificationType),
  resolve: getByUser,
}

// Notification Related by UserId
export const notificationsRelatedByUserId = {
  type: new GraphQLList(NotificationType),
  args: {
    userId: { type: GraphQLInt },
  },
  resolve: getRelatedByUserId,
}

// Notification Related by Read Variable
export const unReadNotifications = {
  type: new GraphQLList(NotificationType),
  resolve: getUnReadNotifications,
}
