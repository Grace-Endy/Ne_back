// Imports
import { GraphQLString, GraphQLInt } from "graphql"

// App Imports
import { NotificationType } from "./types"
import { create, update, remove,updateRead } from "./resolvers"

// Notification create
export const notificationCreate = {
  type: NotificationType,
  args: {
    titre: {
      name: "titre",
      type: GraphQLString,
    },

    categorie: {
      name: "categorie",
      type: GraphQLInt,
    },

    description: {
      name: "description",
      type: GraphQLString,
    },
    status: {
      name: "status",
      type: GraphQLInt,
    },
    mobile_route: {
      name: "mobile_route",
      type: GraphQLString,
    },

    pc_route: {
      name: "pc_route",
      type: GraphQLString,
    },

    source_type: {
      name: "source_type",
      type: GraphQLString,
    },

    read: {
      name: "read",
      type: GraphQLInt,
    },
  },
  resolve: create,
}

// Notification update
export const notificationUpdate = {
  type: NotificationType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },
    titre: {
      name: "titre",
      type: GraphQLString,
    },

    categorie: {
      name: "categorie",
      type: GraphQLInt,
    },

    description: {
      name: "description",
      type: GraphQLString,
    },
    status: {
      name: "status",
      type: GraphQLInt,
    },
    mobile_route: {
      name: "mobile_route",
      type: GraphQLString,
    },

    pc_route: {
      name: "pc_route",
      type: GraphQLString,
    },

    source_type: {
      name: "source_type",
      type: GraphQLString,
    },

    read: {
      name: "read",
      type: GraphQLInt,
    },
  },
  resolve: update,
}

// Notification update read status
export const notificationUpdateRead = {
  type: NotificationType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },

    read: {
      name: "read",
      type: GraphQLInt,
    },
  },
  resolve: updateRead,
}

// Notification remove
export const notificationRemove = {
  type: NotificationType,
  args: {
    id: {
      name: "id",
      type: GraphQLInt,
    },
  },
  resolve: remove,
}
