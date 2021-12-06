// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from "graphql"
import { UserType } from "../user/types"

// Notification type
const NotificationType = new GraphQLObjectType({
  name: "notification",
  description: "Notification Type",

  fields: () => ({
    id: { type: GraphQLInt },
    titre: { type: GraphQLString },
    categorie: { type: GraphQLInt },
    description: { type: GraphQLString },
    user: { type: UserType },
    mobile_route: { type: GraphQLString },
    status: { type: GraphQLInt },
    pc_route: { type: GraphQLString },
    source_type: { type: GraphQLString },
    read: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  }),
})

export { NotificationType }
